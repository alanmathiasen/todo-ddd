import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID";
import { ValueObject } from "../../../shared/domain/ValueObject";

interface UserIdProps {
    value: UniqueEntityID;
}

export class UserId extends ValueObject<UserIdProps> {
    private constructor(props: UserIdProps) {
        super(props);
    }

    getStringValue() {
        return this.props.value.toString();
    }

    getValue(): UniqueEntityID {
        return this.props.value;
    }

    static create(id: UniqueEntityID): UserId {
        return new UserId({ value: id });
    }
}
