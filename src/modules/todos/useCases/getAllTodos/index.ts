import { todoRepo } from "../../repos";
import { GetAllTodosController } from "./GetAllTodosController";
import { GetAllTodosUseCase } from "./GetAllTodosUseCase";

const getAllTodosUseCase = new GetAllTodosUseCase(todoRepo);
const getAllTodosController = new GetAllTodosController(getAllTodosUseCase);

export { getAllTodosController, getAllTodosUseCase };
