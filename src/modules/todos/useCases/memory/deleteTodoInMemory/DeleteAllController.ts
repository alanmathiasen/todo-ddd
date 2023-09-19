import { Request, Response } from "express";
import { BaseController } from "../../../../../shared/infra/http/models/Controller";
import { DeleteAllUseCase } from "./DeleteAllUseCase";
import httpStatus from "http-status";
import { TodoEventEmitter } from "../../../domain/events/TodoEventEmitter";
import { domainEventPublisher } from "../../../infra/events/DomainEventPublisher";

export class DeleteAllController extends BaseController {
  constructor(private useCase: Partial<DeleteAllUseCase>) {
    super();
  }

  async executeImpl(request: Request, response: Response): Promise<void> {
    const { id } = request.params;
    try {
      await this.useCase.execute!();
      const event = new TodoEventEmitter(id);
      domainEventPublisher.emit("Publish", event, "deleted");
      response.status(httpStatus.OK).json("Deleted OK");
    } catch (err) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
