import { ITodoRepository } from "../../../repos/ITodoRepository";
import { TodoId } from "../../../domain/TodoId";

export class GetTodoByIdUseCase {
  constructor(private todoRepository: ITodoRepository) {}

  async execute(todoId: TodoId): Promise<any> {
    const todo = await this.todoRepository.findById(todoId);
    return todo;
  }
}
