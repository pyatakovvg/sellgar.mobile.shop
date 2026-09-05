import { EventCallback } from './event-callback.type.ts';

export abstract class EventServiceInterface<D> {
  abstract emit(event: string, data: D, onFinally?: () => void): void;
  abstract on(event: string, cb: EventCallback<D>): void;
  abstract off(event: string, cb: EventCallback<D>): void;
}
