import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID";
import { ValueObject } from "../../../shared/domain/ValueObject";

interface TodoIdProps {
    value: UniqueEntityID;
}
export class TodoId extends ValueObject<TodoIdProps> {
    private constructor(props: TodoIdProps) {
        super(props);
    }

    getStringValue(): string {
        return this.props.value.toString();
    }

    getValue(): UniqueEntityID {
        return this.props.value;
    }

    public static create(value: UniqueEntityID): TodoId {
        return new TodoId({ value });
    }
}
