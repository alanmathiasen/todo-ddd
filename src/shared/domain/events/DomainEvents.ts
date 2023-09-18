export interface IDomainEvent {
  eventName: string;
  ocurrenceDate: Date;
}

export class DomainEventHandler {
  private handlers: { [key: string]: Array<(event: IDomainEvent) => void> } = {};

  public register(eventName: string, handler: (event: IDomainEvent) => void): void {
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(handler);
  }

  public unregister(eventName: string, handler: (event: IDomainEvent) => void): void {
    if (!this.handlers[eventName]) {
      return;
    }
    this.handlers[eventName] = this.handlers[eventName].filter((h) => h !== handler);
  }

  public dispatch(event: IDomainEvent): void {
    console.log("dispatching");
    if (!this.handlers[event.eventName]) {
      return;
    }
    this.handlers[event.eventName].forEach((handler) => handler(event));
  }
}
