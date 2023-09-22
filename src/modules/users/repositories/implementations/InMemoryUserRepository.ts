import { User } from "../../domain/User";
import { IUserRepository } from "../IUserRepository";

export class InMemoryUserRepository implements IUserRepository {
    private users: Map<string, User>;

    constructor() {
        this.users = new Map<string, User>();
    }
    async save(user: User): Promise<void> {
        this.users.set(user.id.toString(), user);
        console.log(this.users);
        return Promise.resolve();
    }
}
