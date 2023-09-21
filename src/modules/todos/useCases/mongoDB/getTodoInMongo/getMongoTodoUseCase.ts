import { ITodoRepository } from "../../../repos/ITodoRepository";
import { Todo } from "../../../domain/entities/todoEntitie";

export class GetMongoTodoUseCase {
  constructor(private todoRepository: Partial<ITodoRepository>) {}

  async execute(todo: Partial<Todo>): Promise<Todo[] | undefined> {
    try {
      const todoFound = await this.todoRepository.find!(todo);
      return todoFound || console.log('Todo not found');
    } catch (error) {
      console.log(error);
      throw new Error('Todo error')
    }
  }
}