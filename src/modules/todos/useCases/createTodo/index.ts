import { todoRepo } from "../../repos";
import { CreateTodoController } from "./CreateTodoController";
import { CreateTodoUseCase } from "./CreateTodoUseCase";

const createTodoUseCase = new CreateTodoUseCase(todoRepo);
const createTodoController = new CreateTodoController(createTodoUseCase);

export { createTodoUseCase, createTodoController };
