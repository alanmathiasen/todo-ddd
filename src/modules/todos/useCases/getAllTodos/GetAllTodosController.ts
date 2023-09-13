import { Request, Response } from "express";
import { BaseController } from "../../../../shared/infra/http/models/BaseController";
import { GetAllTodosUseCase } from "./GetAllTodosUseCase";
import httpStatus from "http-status";
import { TodoMapper } from "../../mappers/TodoMapper";

export class GetAllTodosController extends BaseController {
  constructor(private useCase: GetAllTodosUseCase) {
    super();
  }
  async executeImpl(request: Request, response: Response): Promise<void> {
    try {
      const todos = await this.useCase.execute();
      const todosDTO = todos.map((t) => TodoMapper.toDTO(t));
      this.ok(response, todosDTO);
    } catch (err: any) {
      console.log(err);
      this.fail(response, err ? err : "Unexpected error");
    }
  }
}
