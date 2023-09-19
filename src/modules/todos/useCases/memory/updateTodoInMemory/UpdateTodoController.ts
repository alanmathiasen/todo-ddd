import { Request, Response } from "express";
import { BaseController } from "../../../../../shared/infra/http/models/Controller";
import { UpdateTodoUseCase } from "./UpdateTodoUseCase";
import httpStatus from "http-status";
import { TodoValidator } from "../../../dtos/TodoValidator";
import { TodoEventEmitter } from "../../../domain/events/TodoEventEmitter";
import { domainEventPublisher } from "../../../infra/events/DomainEventPublisher";

export class UpdateTodoController extends BaseController {
  constructor(private useCase: UpdateTodoUseCase) {
    super();
  }

  async executeImpl(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    try {
      const todo = TodoValidator.sanitizeAndValidate(request.body);
      await this.useCase.execute({ ...todo, id });

      // Raise a domain event
      const event = new TodoEventEmitter(id);
      domainEventPublisher.emit("Publish", event, "updated");

      response.status(httpStatus.OK).json("Updated OK");
    } catch (err) {
      console.log(err);
      response.status(httpStatus.BAD_REQUEST).json("Invalid request body");
    }
  }
}
