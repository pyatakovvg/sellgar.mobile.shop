import { Injectable } from '@sellgar/app';

import { EventServiceInterface } from './event-service.interface.ts';
import { type EventCallback } from './event-callback.type.ts';

@Injectable()
export class EventService<D> implements EventServiceInterface<D> {
  private readonly _subscribers = new Map<string, Array<EventCallback<D>>>();

  on(event: string, cb: EventCallback<D>) {
    if (this._subscribers.has(event)) {
      const subscribers = this._subscribers.get(event)!;
      subscribers.push(cb);

      this._subscribers.set(event, subscribers);
    } else {
      this._subscribers.set(event, [cb]);
    }
  }

  emit(event: string, data: D, onFinally?: () => void) {
    if (this._subscribers.has(event)) {
      const subscribers = this._subscribers.get(event)!;

      Promise.all(subscribers.map((cb) => cb(data))).then(() => onFinally && onFinally());
    } else {
      onFinally && onFinally();
    }
  }

  off(event: string, cb: EventCallback<D>) {
    if (this._subscribers.has(event)) {
      const subscribers = this._subscribers.get(event)!;
      const filteredSubscribers = subscribers.filter((subscriber) => subscriber !== cb);

      if (!!filteredSubscribers.length) {
        this._subscribers.set(event, filteredSubscribers);
      } else {
        this._subscribers.delete(event);
      }
    }
  }
}
