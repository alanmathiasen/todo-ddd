import { Request, Response } from "express";
import { BaseController } from "../../../shared/infra/http/models/BaseController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import httpStatus from "http-status";
import { UserDTO } from "../dtos/UserDTO";

export class CreateUserController extends BaseController {
    constructor(private useCase: CreateUserUseCase) {
        super();
    }

    async executeImpl(request: Request, response: Response): Promise<void> {
        const dto: UserDTO = request.body as UserDTO;

        // TODO sanitizations and validations

        try {
            await this.useCase.execute(dto);
            this.created(response);
        } catch (err) {
            console.log(err);
            this.fail(response, "error creating user" + err);
        }
    }
}
