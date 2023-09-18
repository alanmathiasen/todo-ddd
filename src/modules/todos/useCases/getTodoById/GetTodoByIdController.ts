import { Request, Response } from "express";
import { BaseController } from "../../../../shared/infra/http/models/Controller";
import { GetTodoByIdUseCase } from "./GetTodoByIdUseCase";
import httpStatus from "http-status";
import { TodoId } from "../../domain/TodoId";

export class GetTodoByIdController extends BaseController {
  constructor(private useCase: GetTodoByIdUseCase) {
    super();
  }

  async executeImpl(request: Request, response: Response): Promise<void> {
    const { id } = request.params;
    const todoId = TodoId.create(id);
    // TODO sanitizations and validations

    try {
      const todo = await this.useCase.execute(todoId);
      const thisIsWrong = {
        id: todo.getId().getValue(),
        title: todo.getTitle().getValue(),
        status: todo.status,
      };
      response.status(httpStatus.OK).json(thisIsWrong);
    } catch (err) {
      console.log(err);
    }
  }
}
