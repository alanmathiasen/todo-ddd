import { ValueObject } from "../../../shared/domain/ValueObject";

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
    return new TodoStatus({ value });
  }
}
