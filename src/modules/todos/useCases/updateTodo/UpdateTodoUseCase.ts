import { ITodoRepository } from "../../repos/ITodoRepository";
import { Todo } from "../../domain/Todo";
import { TodoId } from "../../domain/TodoId";
import { TodoStatus } from "../../domain/TodoStatus";
import { TodoTitle } from "../../domain/TodoTitle";
import { TodoDTO } from "../../dtos/TodoDTO";
import { UpdateTodoRequestDTO } from "./UpdateTodoRequestDTO";
import { UseCase } from "../../../../shared/core/UseCase";

export class UpdateTodoUseCase implements UseCase<UpdateTodoRequestDTO, Todo> {
  constructor(private todoRepository: ITodoRepository) {}

  async execute(request: UpdateTodoRequestDTO): Promise<Todo> {
    const id = TodoId.create(request.id);
    let todo: Todo = await this.todoRepository.findById(id);
    let updateTodo = { id: request.id, title: "", status: "" };

    if (request.title) {
      updateTodo.title = request.title;
    } else {
      updateTodo.title = todo.getTitle().getValue();
    }

    if (request.status) {
      updateTodo.status = request.status;
    } else {
      updateTodo.status = todo.getStatus();
    }

    const todoUpdated = await this.todoRepository.update(
      new Todo(new TodoId(updateTodo.id), new TodoTitle(updateTodo.title), updateTodo.status as TodoStatus)
    );

    console.log({ todoUpdated });
    return todoUpdated;
    //TODO implement errors
  }
}
