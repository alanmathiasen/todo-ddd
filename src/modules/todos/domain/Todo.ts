import { TodoTitle } from "./TodoTitle";
import { TodoStatus, TodoStatusValues } from "./TodoStatus";
import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID";
import { AggregateRoot } from "../../../shared/domain/AggregateRoot";
import { Task } from "./Task";
import { TodoCreated } from "./events/todoCreated";

export interface TodoProps {
  title: TodoTitle;
  status: TodoStatus;
  tasks?: Task[];
}

export class Todo extends AggregateRoot<TodoProps> {
  constructor(props: TodoProps, id?: UniqueEntityID) {
    super(props, id);
  }

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
    const todo = new Todo(props, id);
    const todoCreatedEvent = new TodoCreated(todo);
    todo.addDomainEvent(todoCreatedEvent);
    return todo;
  }
}
