import { Request, Response } from "express";
import { BaseController } from "../../../../shared/infra/http/models/BaseController";
import { UpdateTodoUseCase } from "./UpdateTodoUseCase";
import { UpdateTodoRequestDTO } from "./UpdateTodoRequestDTO";
import { TodoMapper } from "../../mappers/TodoMapper";

export class UpdateTodoController extends BaseController {
  constructor(private useCase: UpdateTodoUseCase) {
    super();
  }

  async executeImpl(request: Request, response: Response): Promise<void> {
    const { id } = request.params;
    const dto: UpdateTodoRequestDTO = { id, ...request.body };
    // TODO sanitizations and validations
    try {
      const updated = await this.useCase.execute(dto);
      this.ok(response, TodoMapper.toDTO(updated));
    } catch (err: any) {
      this.fail(response, err ? err : "Unexpected error");
    }
  }
}
