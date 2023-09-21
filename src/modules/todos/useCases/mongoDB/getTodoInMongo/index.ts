import { GetMongoTodoByIdUseCase } from "./getMongoTodoByIdUseCase";
import { GetMongoTodoByIdController } from "./getMongoTodoByIdController";
import { mongoTodoRepo } from "../../../repos";
import { GetMongoTodoController } from "./getMongoTodoController";
import { GetMongoTodoUseCase } from "./getMongoTodoUseCase";

const getMongoTodoByIdUseCase = new GetMongoTodoByIdUseCase(mongoTodoRepo);
const getMongoTodoByIdController = new GetMongoTodoByIdController(
  getMongoTodoByIdUseCase
);

const getMongoTodoUseCase = new GetMongoTodoUseCase(mongoTodoRepo);
const getMongoTodoController = new GetMongoTodoController(
  getMongoTodoUseCase
)

export { getMongoTodoByIdController, getMongoTodoByIdUseCase, getMongoTodoController, getMongoTodoUseCase };
