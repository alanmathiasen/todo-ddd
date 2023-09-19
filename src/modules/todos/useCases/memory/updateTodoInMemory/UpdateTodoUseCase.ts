import { ITodoRepository } from "../../../repos/ITodoRepository";
import { Todo } from "../../../domain/entities/todoEntitie";
import { TodoId } from "../../../domain/TodoId";
import { TodoStatus } from "../../../domain/TodoStatus";
import { TodoTitle } from "../../../domain/TodoTitle";
import { TodoDTO } from "../../../dtos/TodoDTO";

export class UpdateTodoUseCase {
  constructor(private todoRepository: ITodoRepository) {}

  async execute(request: TodoDTO): Promise<any> {
    const id = TodoId.create(request.id);
    const title = TodoTitle.create(request.title);
    const status =
      request.status === "OPEN" ? TodoStatus.OPEN : TodoStatus.COMPLETED;

    const todoUpdated = await this.todoRepository.update(
      new Todo(id, title, status)
    );

    console.log({ todoUpdated });
    //TODO implement errors
  }
}
