import { Request, Response } from "express";
import { BaseController } from "../../../../shared/infra/http/models/Controller";
import { TodoDTO } from "../../dtos/TodoDTO";
import { UpdateTodoUseCase } from "./UpdateTodoUseCase";
import httpStatus from "http-status";

export class UpdateTodoController extends BaseController {
  constructor(private useCase: UpdateTodoUseCase) {
    super();
  }

  async executeImpl(request: Request, response: Response): Promise<void> {
    const { id } = request.params;
    const todo: TodoDTO = request.body;

    // TODO sanitizations and validations

    try {
      await this.useCase.execute({ ...todo, id });
      response.status(httpStatus.OK).json("Updated OK");
    } catch (err) {
      console.log(err);
    }
  }
}
