import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID";
import { IDomainEvent } from "../../../../shared/domain/events/DomainEvents";
import { User } from "../User";

export class UserCreated implements IDomainEvent {
    public ocurrenceDate: Date;
    public eventName: string;
    public user: User;

    constructor(user: User) {
        this.ocurrenceDate = new Date();
        this.eventName = "UserCreated";
        this.user = user;
        console.log(this.constructor.name, "event created!");
    }

    getAggregateId(): UniqueEntityID {
        return this.user.id;
    }
}
