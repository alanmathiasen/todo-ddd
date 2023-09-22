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
        return new UserName({ value });
    }
}
