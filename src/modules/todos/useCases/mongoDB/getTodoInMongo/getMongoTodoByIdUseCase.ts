import { ITodoRepository } from "../../../repos/ITodoRepository";
import { Todo } from "../../../domain/entities/todoEntitie";
import { TodoId } from "../../../domain/TodoId";

export class GetMongoTodoByIdUseCase {
  constructor(private todoRepository: Partial<ITodoRepository>) {}
  async execute(todoId: TodoId): Promise<Todo | undefined> {
    try {
      const todo = await this.todoRepository.findById!(todoId);
      return todo || undefined;
    } catch (error) {
      console.log(error);
      throw new Error('Todo error')
    }
  }
}
