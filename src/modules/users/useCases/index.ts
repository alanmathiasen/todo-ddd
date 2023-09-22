import { userRepo } from "../repositories";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const createUserUseCase = new CreateUserUseCase(userRepo);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };