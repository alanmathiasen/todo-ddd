import { UserDTO } from "../dtos/UserDTO";
import { UserName } from "../domain/UserName";
import { UserPassword } from "../domain/UserPassword";
import { UserEmail } from "../domain/UserEmail";
import { User } from "../domain/User";
import { IUserRepository } from "../repositories/IUserRepository";
import { UseCase } from "../../../shared/core/UseCase";
import { DomainEvents } from "../../../shared/domain/events/DomainEvents";

export class CreateUserUseCase implements UseCase<UserDTO, void> {
    constructor(private userRepository: IUserRepository) {}

    async execute(request: UserDTO): Promise<void> {
        const email: UserEmail = UserEmail.create(request.email);
        const username: UserName = UserName.create(request.username);
        const password: UserPassword = UserPassword.create(request.password);
        const user: User = User.create({ email, username, password });
        await this.userRepository.save(user);
        // Dispatch any domain events
        user.domainEvents.forEach((event) => DomainEvents.dispatch(event));
        user.clearEvents();
    }
    //TODO implement errors
}