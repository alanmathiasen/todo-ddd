import { TodoId } from "./TodoId";
import { TodoTitle } from "./TodoTitle";
import { TodoStatus, TodoStatusValues } from "./TodoStatus";
import { Entity } from "../../../shared/domain/Entity";
import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID";
import { AggregateRoot } from "../../../shared/domain/AggregateRoot";

export interface TodoProps {
  title: TodoTitle;
  status: TodoStatus;
}

export class Todo extends AggregateRoot<TodoProps> {
  constructor(props: TodoProps, id?: UniqueEntityID) {
    super(props, id);
  }

  // public getId(): UniqueEntityID {
  //   return TodoId.create(this._id).getValue();
  // }

  get title(): TodoTitle {
    return this.props.title;
  }

  get status(): TodoStatus {
    return this.props.status;
  }

  public complete(): void {
    this.props.status = TodoStatus.create(TodoStatusValues.COMPLETED);
  }

  public reopen(): void {
    this.props.status = TodoStatus.create(TodoStatusValues.OPEN);
  }

  public static create(props: TodoProps, id?: UniqueEntityID): Todo {
    return new Todo(props, id);
  }
}
