import { todoRepo } from "../../repos";
import { GetTodoByIdController } from "./GetTodoByIdController";
import { GetTodoByIdUseCase } from "./GetTodoByIdUseCase";

const getTodoByIdUseCase = new GetTodoByIdUseCase(todoRepo);
const getTodoByIdController = new GetTodoByIdController(getTodoByIdUseCase);

export { getTodoByIdUseCase, getTodoByIdController };
