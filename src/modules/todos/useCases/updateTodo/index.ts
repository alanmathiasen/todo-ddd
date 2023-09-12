import { todoRepo } from "../../repos";
import { UpdateTodoController } from "./UpdateTodoController";
import { UpdateTodoUseCase } from "./UpdateTodoUseCase";

const updateTodoUseCase = new UpdateTodoUseCase(todoRepo);
const updateTodoController = new UpdateTodoController(updateTodoUseCase);

export { updateTodoUseCase, updateTodoController };
