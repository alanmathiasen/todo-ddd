import { ValueObject } from "../../../shared/domain/ValueObject";

export interface UserPasswordProps {
  value: string;
}
export class UserPassword extends ValueObject<UserPasswordProps> {
  private constructor(props: UserPasswordProps) {
    super(props);
  }

  get value() {
    return this.props.value;
  }

  static create(value: string): UserPassword {
    if (value === undefined) {
      throw new Error("Password is required");
    }
    return new UserPassword({ value });
  }
}
