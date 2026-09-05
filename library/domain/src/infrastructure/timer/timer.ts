import { Inject, Injectable } from '@sellgar/app';

import { EventServiceInterface } from '../event/event-service.interface.ts';
import { TimerInterface } from './timer.interface.ts';

@Injectable()
export class Timer implements TimerInterface {
  private isRunning: boolean = false;

  private lastTickTime: number = 0;
  private accumulatedTime: number = 0;

  private lastTimestamp: number | null = null;
  private animationFrameId: number | null = null;

  constructor(@Inject(EventServiceInterface) readonly events: EventServiceInterface<any>) {}

  private _tick = (timestamp: number) => {
    if (!this.isRunning) {
      return;
    }

    if (this.lastTimestamp === null) {
      this.lastTimestamp = timestamp;
      this.animationFrameId = requestAnimationFrame(this._tick);
      return;
    }

    const delta = timestamp - this.lastTimestamp;

    this.lastTimestamp = timestamp;
    this.accumulatedTime += delta;

    if (this.accumulatedTime - this.lastTickTime >= 1000) {
      this.lastTickTime = this.accumulatedTime;
      this.events.emit('tick', this.accumulatedTime);
    }

    this.animationFrameId = requestAnimationFrame(this._tick);
  };

  private _reset() {
    if (!this.isRunning) {
      return;
    }

    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    this.isRunning = false;
    this.lastTimestamp = null;
  }

  start() {
    if (this.isRunning) {
      return;
    }

    this.isRunning = true;
    this.lastTimestamp = null;
    this.lastTickTime = this.accumulatedTime;
    this.animationFrameId = requestAnimationFrame(this._tick);

    this.events.emit('start', {});
  }

  stop() {
    this._reset();

    this.events.emit('stop', {});
  }
}
