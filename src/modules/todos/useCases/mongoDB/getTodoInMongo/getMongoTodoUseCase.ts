import { ITodoRepository } from "../../../repos/ITodoRepository";
import { Todo } from "../../../domain/entities/todoEntitie";
import { TodoDTO } from "../../../dtos/TodoDTO";
import { TodoId } from "../../../domain/TodoId";
import { TodoTitle } from "../../../domain/TodoTitle";
import { TodoStatus } from "../../../domain/TodoStatus";

export class GetMongoTodoUseCase {
  constructor(private todoRepository: Partial<ITodoRepository>) {}

  async execute(todo: TodoDTO): Promise<Todo[] | undefined> {
    try {
      const id = TodoId.create(todo.id);
      const title = TodoTitle.create(todo.title);
      const status = todo.status;
      if (!(status in TodoStatus)) {
        throw new Error('Status has to be either OPEN or COMPLETED');
      }
      const todoCreated = new Todo(id, title, status as TodoStatus);
      const todoFound = await this.todoRepository.find!(todoCreated);
      if (!todoFound) {
        console.log("Todo not found");
        return undefined;
      }
      return todoFound;
    } catch (error) {
      console.log(error);
      throw new Error("Todo error");
    }
  }
}
