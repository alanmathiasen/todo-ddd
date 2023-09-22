import { AggregateRoot } from "../../../shared/domain/AggregateRoot";
import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { UserName } from "./UserName";
import { UserPassword } from "./UserPassword";
import { UserCreated } from "./events/UserCreated";

export interface UserProps {
    email: UserEmail;
    username: UserName;
    password: UserPassword;
    isEmailVerified?: boolean;
    accessToken?: string;
    lastLogin?: Date;
}

export class User extends AggregateRoot<UserProps> {
    private constructor(props: UserProps, id?: UniqueEntityID) {
        super(props, id);
    }

    get userId(): UniqueEntityID {
        return UserId.create(this.id).getValue();
    }

    get email(): UserEmail {
        return this.props.email;
    }

    get username(): UserName {
        return this.props.username;
    }

    get password(): UserPassword {
        return this.props.password;
    }

    static create(props: UserProps, id?: UniqueEntityID): User {
        //todo we should implement some type of guard to assure all props are valid
        // instead of this vvv
        console.log(JSON.stringify(props, null, 2));
        if (props.email.value === undefined) {
            throw new Error("Email is required");
        }
        if (props.username.value === undefined) {
            throw new Error("Username is required");
        }
        if (props.password.value === undefined) {
            throw new Error("Password is required");
        }
        const isNewUser = !!id === false;
        const user = new User(
            {
                ...props,
                isEmailVerified: props.isEmailVerified
                    ? props.isEmailVerified
                    : false,
            },
            id
        );
        if (isNewUser) {
            user.addDomainEvent(new UserCreated(user));
        }
        // const userCreatedEvent = new UserCreated(user);
        // user.addDomainEvent(userCreatedEvent);
        return user;
    }
}
