import httpStatus from "http-status";
import { BaseController } from "../../../../../shared/infra/http/models/Controller";
import { Todo } from "../../../domain/entities/todoEntitie";
import { GetMongoTodoUseCase } from "./getMongoTodoUseCase";

export class GetMongoTodoController extends BaseController {
  constructor(private useCase: GetMongoTodoUseCase) {
    super();
  }

  async executeImpl(request: any, response: any): Promise<void> {
    try {
      const { id, title, status } = request.body;
      const todoId = new Todo(id, title, status);
      const todo = await this.useCase.execute(todoId);
      response.status(httpStatus.OK).json(todo);
    } catch (error) {
      console.log(error);
    }
  }
}