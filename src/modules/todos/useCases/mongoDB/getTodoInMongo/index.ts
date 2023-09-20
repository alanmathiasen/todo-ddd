import { GetMongoTodoByIdUseCase } from "./getMongoTodoByIdUseCase";
import { GetMongoTodoByIdController } from "./getMongoTodoByIdController";
import { mongoTodoRepo } from "../../../repos";

const getMongoTodoByIdUseCase = new GetMongoTodoByIdUseCase(mongoTodoRepo);
const getMongoTodoByIdController = new GetMongoTodoByIdController(
  getMongoTodoByIdUseCase
);

export { getMongoTodoByIdController, getMongoTodoByIdUseCase };
