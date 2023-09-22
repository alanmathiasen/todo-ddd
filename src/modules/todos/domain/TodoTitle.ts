import { ValueObject } from "../../../shared/domain/ValueObject";

export interface TodoTitleProps {
  value: string;
}
export class TodoTitle extends ValueObject<TodoTitleProps> {
  private constructor(props: TodoTitleProps) {
    // You can add validation logic here if needed
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static create(value: string): TodoTitle {
    if (value === undefined) throw new Error("Title is required");
    return new TodoTitle({ value });
  }
}
