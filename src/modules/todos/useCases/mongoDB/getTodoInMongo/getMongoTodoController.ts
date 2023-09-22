import httpStatus from "http-status";
import { BaseController } from "../../../../../shared/infra/http/models/Controller";
import { Todo } from "../../../domain/entities/todoEntitie";
import { GetMongoTodoUseCase } from "./getMongoTodoUseCase";
import { Request, Response } from "express";
import { TodoDTO } from "../../../dtos/TodoDTO";

export class GetMongoTodoController extends BaseController {
  constructor(private useCase: GetMongoTodoUseCase) {
    super();
  }

  async executeImpl(request: Request, response: Response): Promise<void> {
    try {
      const todoData = request.body as TodoDTO;
      const todo = await this.useCase.execute(todoData);
      response.status(httpStatus.OK).json(todo);
    } catch (error) {
      console.log(error);
    }
  }
}