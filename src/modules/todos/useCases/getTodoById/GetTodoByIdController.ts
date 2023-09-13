import { Request, Response } from "express";
import httpStatus from "http-status";
import { Todo } from "../../domain/Todo";
import { TodoDTO } from "../../dtos/TodoDTO";
import { GetTodoByIdUseCase } from "./GetTodoByIdUseCase";
import { GetTodoByIdRequestDTO } from "./GetTodoByIdRequestDTO";
import { BaseController } from "../../../../shared/infra/http/models/BaseController";
import { TodoMapper } from "../../mappers/TodoMapper";

export class GetTodoByIdController extends BaseController {
  constructor(private useCase: GetTodoByIdUseCase) {
    super();
  }

  async executeImpl(request: Request, response: Response): Promise<void> {
    const dto: GetTodoByIdRequestDTO = {
      id: request.params.id,
    };
    // TODO sanitizations and validations

    try {
      const todo: Todo = await this.useCase.execute(dto);
      const todoResponse: TodoDTO = TodoMapper.toDTO(todo);
      this.ok(response, todoResponse);
    } catch (err) {
      console.log(err);
    }
  }
}
