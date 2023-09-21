export interface IDomainEvent {
    eventName: string;
    ocurrenceDate: Date;
}

export class DomainEvents {
    private static handlers: {
        [key: string]: Array<(event: IDomainEvent) => void>;
    } = {};

    public static register<T>(
        eventName: string,
        handler: (event: IDomainEvent) => void
    ): void {
        console.log(eventName, " registered!");
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(handler);
    }

    public static unregister(
        eventName: string,
        handler: (event: IDomainEvent) => void
    ): void {
        if (!this.handlers[eventName]) {
            return;
        }
        this.handlers[eventName] = this.handlers[eventName].filter(
            (h) => h !== handler
        );
    }

    public static dispatch(event: IDomainEvent): void {
        if (!this.handlers[event.eventName]) {
            return;
        }
        console.log("dispatching event: ", event.eventName);

        console.log(this.handlers[event.eventName].length);
        this.handlers[event.eventName].forEach((handler) => handler(event));
    }
}
