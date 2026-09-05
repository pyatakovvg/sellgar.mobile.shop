import type { CreateAndSendInput } from './input/create-and-send.input.ts';
import { FormActionHtmlSource } from './form-action-html-source.interface.ts';
import { FormActionMultipleSubmitOptions } from './form-action-multiple-submit-options.interface.ts';

export abstract class FormActionServiceInterface {
  abstract createSubmitSource(dto: CreateAndSendInput, target?: string): FormActionHtmlSource;
  abstract createMultipleSubmitSource(
    dtos: CreateAndSendInput[],
    options?: FormActionMultipleSubmitOptions,
  ): FormActionHtmlSource;
}
