export type EventCallback<D> = (data: D) => Promise<void> | void;
