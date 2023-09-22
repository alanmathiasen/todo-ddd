import { User } from "../domain/User";
import { UserDTO } from "../dtos/UserDTO";

export class UserMapper {
  static toDTO(user: User): UserDTO {
    return {
      email: user.email.value,
      username: user.username.value,
      password: user.password.value,
      isEmailVerified: user.isEmailVerified ? user.isEmailVerified : false,
    };
  }
}
