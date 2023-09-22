import { ValueObject } from "../../../shared/domain/ValueObject";
import { Todo } from "./Todo";

export enum TodoStatusValues {
  OPEN = "OPEN",
  IN_PROGRESS = "IN PROGRESS",
  COMPLETED = "COMPLETED",
}
export interface TodoStatusProps {
  value: TodoStatusValues;
}

export class TodoStatus extends ValueObject<TodoStatusProps> {
  private constructor(props: TodoStatusProps) {
    super(props);
  }

  get value() {
    return this.props.value;
  }

  public static create(value: TodoStatusValues): TodoStatus {
    if (!Object.values(TodoStatusValues).includes(value)) throw new Error("Invalid todo status");
    return new TodoStatus({ value });
  }
}
