import { Request, Response } from "express";
import { BaseController } from "../../../../shared/infra/http/models/Controller";
import { TodoDTO } from "../../dtos/TodoDTO";
import { CreateTodoUseCase } from "./CreateTodoUseCase";
import httpStatus from "http-status";

export class CreateTodoController extends BaseController {
  constructor(private useCase: CreateTodoUseCase) {
    super();
  }

  async executeImpl(request: Request, response: Response): Promise<void> {
    const dto: TodoDTO = request.body as TodoDTO;

    // TODO sanitizations and validations

    try {
      await this.useCase.execute(dto);
      response.status(httpStatus.CREATED).json("OK");
    } catch (err) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
