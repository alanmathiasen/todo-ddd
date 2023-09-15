import { ITodoRepository } from "../../repos/ITodoRepository";
import { Todo } from "../../domain/Todo";
import { TodoId } from "../../domain/TodoId";
import { TodoStatus } from "../../domain/TodoStatus";
import { TodoTitle } from "../../domain/TodoTitle";
import { TodoDTO } from "../../dtos/TodoDTO";
import httpStatus from "http-status";

export class CreateTodoUseCase {
  constructor(private todoRepository: ITodoRepository) {}

  async execute(request: TodoDTO): Promise<any> {
    try {
      if(!request.id || !request.title) {
        throw new Error();
      }
      const id: TodoId = TodoId.create(request.id);
      const title: TodoTitle = TodoTitle.create(request.title);
      const status: TodoStatus =
        request.status === "OPEN" ? TodoStatus.OPEN : TodoStatus.COMPLETED;
  
      const todo: Todo = new Todo(id, title, status);
      await this.todoRepository.save(todo);
      console.log(todo);
    } catch (error) {
      throw new Error(httpStatus.INTERNAL_SERVER_ERROR.toString());
    }
  }
}
