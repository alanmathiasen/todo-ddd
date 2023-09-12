import { ITodoRepository } from "../../repos/ITodoRepository";
import { Todo } from "../../domain/Todo";
import { TodoId } from "../../domain/TodoId";
import { TodoStatus } from "../../domain/TodoStatus";
import { TodoTitle } from "../../domain/TodoTitle";
import { TodoDTO } from "../../dtos/TodoDTO";

export class GetTodoByIdUseCase {
  constructor(private todoRepository: ITodoRepository) {}

  async execute(todoId: TodoId): Promise<any> {
    const todo = await this.todoRepository.findById(todoId);
    return todo;
  }
}
