import { ValueObject } from "../../../shared/domain/ValueObject";

export class TodoId extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    // add validation if needed
  }

  public static create(value: string): TodoId {
    return new TodoId(value);
  }
}
