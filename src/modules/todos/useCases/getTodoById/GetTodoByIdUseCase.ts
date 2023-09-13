import { ITodoRepository } from "../../repos/ITodoRepository";
import { Todo } from "../../domain/Todo";
import { TodoId } from "../../domain/TodoId";
import { UseCase } from "../../../../shared/core/UseCase";
import { GetTodoByIdRequestDTO } from "./GetTodoByIdRequestDTO";

export class GetTodoByIdUseCase implements UseCase<GetTodoByIdRequestDTO, Todo> {
  constructor(private todoRepository: ITodoRepository) {}

  async execute(request: GetTodoByIdRequestDTO): Promise<any> {
    const todo = await this.todoRepository.findById(TodoId.create(request.id));
    return todo;
  }
}
