import { todoRepo } from "../../repos";
import { DeleteTodoController } from "./DeleteTodoController";
import { DeleteTodoUseCase } from "./DeleteTodoUseCase";

const deleteTodoUseCase = new DeleteTodoUseCase(todoRepo);
const deleteTodoController = new DeleteTodoController(deleteTodoUseCase);

export { deleteTodoUseCase, deleteTodoController };
