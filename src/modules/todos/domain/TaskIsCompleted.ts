import { ValueObject } from "../../../shared/domain/ValueObject";

export interface TaskIsCompletedProps {
  value: boolean;
}

export class TaskIsCompleted extends ValueObject<TaskIsCompletedProps> {
  private constructor(props: TaskIsCompletedProps) {
    super(props);
  }

  get value(): boolean {
    return this.props.value;
  }

  public static create(value: boolean): TaskIsCompleted {
    return new TaskIsCompleted({ value });
  }
}
