import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID";
import { ValueObject } from "../../../shared/domain/ValueObject";

export class TodoId extends ValueObject<{ value: UniqueEntityID }> {
  private constructor(value: UniqueEntityID) {
    super({ value });
  }

  getStringValue(): string {
    return this.props.value.toString();
  }

  getValue(): UniqueEntityID {
    return this.props.value;
  }

  public static create(value: UniqueEntityID): TodoId {
    return new TodoId(value);
  }
}
