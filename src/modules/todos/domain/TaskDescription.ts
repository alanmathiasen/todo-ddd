import { ValueObject } from "../../../shared/domain/ValueObject";
export interface TaskDescriptionProps {
  value: string;
}
export class TaskDescription extends ValueObject<TaskDescriptionProps> {
  private constructor(props: TaskDescriptionProps) {
    super(props);
  }

  get value() {
    return this.props.value;
  }

  public static create(value: string): TaskDescription {
    return new TaskDescription({ value });
  }
}
