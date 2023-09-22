import { ValueObject } from "../../../shared/domain/ValueObject";

export interface UserNameProps {
  value: string;
}
export class UserName extends ValueObject<UserNameProps> {
  private constructor(props: UserNameProps) {
    super(props);
  }

  get value() {
    return this.props.value;
  }

  static create(value: string): UserName {
    if (value === undefined) {
      throw new Error("Username is required");
    }
    return new UserName({ value });
  }
}
