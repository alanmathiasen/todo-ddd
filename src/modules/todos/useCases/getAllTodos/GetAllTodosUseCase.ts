import { UseCase } from "../../../../shared/core/UseCase";
import { NullRequest } from "../../../../shared/dtos/NullRequest";
import { Todo } from "../../domain/Todo";
import { ITodoRepository } from "../../repos/ITodoRepository";

export class GetAllTodosUseCase implements UseCase<NullRequest, Todo[]> {
  constructor(private todoRepository: ITodoRepository) {}

  async execute(): Promise<Todo[]> {
    const todos = await this.todoRepository.findAll();
    return todos;
  }
}
