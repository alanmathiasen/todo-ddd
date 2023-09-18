import { todoRepo } from "../../repos";
import { DeleteTodoController } from "./DeleteTodoController";
import { DeleteTodoUseCase } from "./DeleteTodoUseCase";
import { DeleteAllUseCase } from "./DeleteAllUseCase";
import { DeleteAllController } from "./DeleteAllController";

const deleteTodoUseCase = new DeleteTodoUseCase(todoRepo);
const deleteTodoController = new DeleteTodoController(deleteTodoUseCase);

const deleteAllUseCase = new DeleteAllUseCase(todoRepo);
const deleteAllController = new DeleteAllController(deleteAllUseCase);

export { deleteTodoUseCase, deleteTodoController, deleteAllUseCase, deleteAllController };
