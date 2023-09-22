import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID";
import { IDomainEvent } from "../../../../shared/domain/events/DomainEvents";
import { Todo } from "../Todo";

export class TodoCreated implements IDomainEvent {
  public ocurrenceDate: Date;
  public eventName: string;
  public todo: Todo;

  constructor(todo: Todo) {
    this.ocurrenceDate = new Date();
    this.eventName = "TodoCreated";
    this.todo = todo;
    console.log(this.constructor.name, "event created!");
  }

  getAggregateId(): UniqueEntityID {
    return this.todo.id;
  }
}
