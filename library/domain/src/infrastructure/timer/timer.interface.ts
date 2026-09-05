import { EventServiceInterface } from '../event/event-service.interface.ts';
import { ITimerEvents } from './timer-events.interface.ts';

export abstract class TimerInterface {
  abstract events: EventServiceInterface<ITimerEvents>;

  abstract start(): void;
  abstract stop(): void;
}
