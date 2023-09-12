import { ValueObject } from "../../../shared/domain/ValueObject";

export class TodoTitle extends ValueObject<string> {
  constructor(value: string) {
    // You can add validation logic here if needed
    super(value);
  }

  public static create(value: string): TodoTitle {
    return new TodoTitle(value);
  }
}
