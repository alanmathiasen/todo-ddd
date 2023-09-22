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
        return new UserEmail({ value });
    }
}
