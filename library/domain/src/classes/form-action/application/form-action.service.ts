import { Injectable } from '@sellgar/app';

import { FormActionHtmlSource } from './form-action-html-source.interface.ts';
import { FormActionMultipleSubmitOptions } from './form-action-multiple-submit-options.interface.ts';
import { FormActionServiceInterface } from './form-action-service.interface.ts';

import type { CreateAndSendInput } from './input/create-and-send.input.ts';

const REQUEST_MAX_ATTEMPTS = 3;
const REQUEST_SETTLE_DELAY_MS = 1000;
const REQUEST_CLEANUP_DELAY_MS = 10000;

@Injectable()
export class FormActionService implements FormActionServiceInterface {
  constructor() {}

  private _escapeHtml(value: string) {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  private _createFormInputs(params: CreateAndSendInput['params']) {
    return Object.entries(params || {})
      .map(([key, value]) => {
        return `<input type="hidden" name="${this._escapeHtml(key)}" value="${this._escapeHtml(String(value))}" />`;
      })
      .join('');
  }

  private _createSubmitForm(dto: CreateAndSendInput, target: string) {
    return `
      <form method="${this._escapeHtml(dto.method)}" action="${this._escapeHtml(dto.url)}" target="${this._escapeHtml(target)}" enctype="application/x-www-form-urlencoded">
        ${this._createFormInputs(dto.params)}
      </form>
    `;
  }

  private _createHtml(body: string, script: string) {
    return `
      <!doctype html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          ${body}
          <script>
            ${script}
          </script>
        </body>
      </html>
    `;
  }

  private _createScriptData(value: unknown) {
    const json = JSON.stringify(value);

    return (json === undefined ? 'undefined' : json)
      .replace(/</g, '\\u003c')
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029');
  }

  private _createMultipleSubmitScript(dtos: CreateAndSendInput[], options: FormActionMultipleSubmitOptions) {
    const completionMessage =
      typeof options.postMessage === 'string' ? this._createScriptData(options.postMessage) : 'null';
    const postMessageDelay = options.postMessageDelay || 0;

    return `
      var actions = ${this._createScriptData(dtos)};
      var completionMessage = ${completionMessage};
      var requestFrameIndex = 0;

      function postMessage(data) {
        if (!window.ReactNativeWebView) {
          return;
        }

        window.ReactNativeWebView.postMessage(typeof data === 'string' ? data : JSON.stringify(data));
      }

      function createParam(name, value) {
        var param = document.createElement('input');
        param.type = 'hidden';
        param.name = name;
        param.value = String(value);
        return param;
      }

      function appendParams(form, params) {
        if (!params || typeof params !== 'object') {
          return;
        }

        Object.keys(params).forEach(function(key) {
          form.appendChild(createParam(key, params[key]));
        });
      }

      function submitForm(action) {
        return new Promise(function(resolve, reject) {
          var iframe = document.createElement('iframe');
          var form = document.createElement('form');
          var iframeName = 'form-action-frame-' + Date.now() + '-' + requestFrameIndex++;
          var settled = false;

          function cleanup() {
            if (form.parentElement) {
              form.parentElement.removeChild(form);
            }

            setTimeout(function() {
              if (iframe.parentElement) {
                iframe.parentElement.removeChild(iframe);
              }
            }, ${REQUEST_CLEANUP_DELAY_MS});
          }

          function finish(callback) {
            if (settled) {
              return;
            }

            settled = true;
            cleanup();
            callback();
          }

          function fail(reason) {
            finish(function() {
              reject(new Error(reason));
            });
          }

          iframe.style.position = 'absolute';
          iframe.style.width = '1px';
          iframe.style.height = '1px';
          iframe.style.opacity = '0';
          iframe.style.border = '0';
          iframe.name = iframeName;
          iframe.src = 'about:blank';
          iframe.setAttribute('referrerpolicy', 'no-referrer');
          iframe.onerror = function() {
            fail('iframe error');
          };

          form.method = action.method;
          form.action = action.url;
          form.target = iframeName;
          form.enctype = 'application/x-www-form-urlencoded';
          form.onerror = function() {
            fail('form error');
          };
          appendParams(form, action.params);

          document.body.appendChild(iframe);
          document.body.appendChild(form);

          try {
            form.submit();
          } catch (error) {
            fail(error && error.message ? error.message : String(error));
            return;
          }

          setTimeout(function() {
            finish(resolve);
          }, ${REQUEST_SETTLE_DELAY_MS});
        });
      }

      async function requestAction(action, index) {
        for (var attempt = 1; attempt <= ${REQUEST_MAX_ATTEMPTS}; attempt++) {
          try {
            await submitForm(action);
            postMessage({
              type: 'form-action-request-succeeded',
              formUrl: action.url,
              index: index,
              attempt: attempt
            });
            return;
          } catch (error) {
            postMessage({
              type: 'form-action-request-failed',
              formUrl: action.url,
              index: index,
              attempt: attempt,
              failureReason: error && error.message ? error.message : String(error)
            });
          }
        }

        postMessage({
          type: 'form-action-request-attempts-exhausted',
          formUrl: action.url,
          index: index,
          attempts: ${REQUEST_MAX_ATTEMPTS}
        });
      }

      async function run() {
        for (var index = 0; index < actions.length; index++) {
          await requestAction(actions[index], index);
        }

        if (completionMessage !== null) {
          setTimeout(function() {
            postMessage(completionMessage);
          }, ${postMessageDelay});
        }
      }

      run();
    `;
  }

  createSubmitSource(dto: CreateAndSendInput, target: string = '_self'): FormActionHtmlSource {
    return {
      html: this._createHtml(this._createSubmitForm(dto, target), 'document.forms[0].submit();'),
      baseUrl: dto.url,
    };
  }

  createMultipleSubmitSource(
    dtos: CreateAndSendInput[],
    options: FormActionMultipleSubmitOptions = {},
  ): FormActionHtmlSource {
    return {
      html: this._createHtml('', this._createMultipleSubmitScript(dtos, options)),
      baseUrl: dtos[0]?.url,
    };
  }
}
