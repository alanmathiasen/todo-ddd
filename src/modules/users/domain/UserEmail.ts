import { ValueObject } from "../../../shared/domain/ValueObject";

export interface UserEmailProps {
  value: string;
}
export class UserEmail extends ValueObject<UserEmailProps> {
  private constructor(props: UserEmailProps) {
    super(props);
  }

  get value() {
    return this.props.value;
  }

  static create(value: string): UserEmail {
    if (value === undefined) {
      throw new Error("Email is required");
    }
    return new UserEmail({ value });
  }
}
