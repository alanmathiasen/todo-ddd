import { ITodoRepository } from "../../repos/ITodoRepository";
import { Todo } from "../../domain/Todo";
import { TodoId } from "../../domain/TodoId";
import { UseCase } from "../../../../shared/core/UseCase";
import { GetTodoByIdRequestDTO } from "./GetTodoByIdRequestDTO";
import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID";

export class GetTodoByIdUseCase
  implements UseCase<GetTodoByIdRequestDTO, Todo>
{
  constructor(private todoRepository: ITodoRepository) {}

  async execute(request: GetTodoByIdRequestDTO): Promise<any> {
    const todo = await this.todoRepository.findById(
      TodoId.create(new UniqueEntityID(request.id))
    );
    return todo;
  }
}
