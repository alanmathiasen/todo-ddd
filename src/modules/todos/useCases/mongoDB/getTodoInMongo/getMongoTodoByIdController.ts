import httpStatus from "http-status";
import { BaseController } from "../../../../../shared/infra/http/models/Controller";
import { TodoId } from "../../../domain/TodoId";
import { GetMongoTodoByIdUseCase } from "./getMongoTodoByIdUseCase";

export class GetMongoTodoByIdController extends BaseController {
  constructor(private useCase: GetMongoTodoByIdUseCase) {
    super();
  }

  async executeImpl(request: any, response: any): Promise<void> {
    try {
      const { id } = request.params;
      const todoId = new TodoId(id);
      const todo = await this.useCase.execute(todoId);
      response.status(httpStatus.OK).json(todo);
    } catch (error) {
      console.log(error);
    }
  }
}
