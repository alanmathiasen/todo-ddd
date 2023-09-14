import { ITodoRepository } from "../../repos/ITodoRepository";
import { Todo } from "../../domain/Todo";
import { TodoId } from "../../domain/TodoId";
import { TodoStatus } from "../../domain/TodoStatus";
import { TodoTitle } from "../../domain/TodoTitle";
import { TodoDTO } from "../../dtos/TodoDTO";
import { UpdateTodoRequestDTO } from "./UpdateTodoRequestDTO";
import { UseCase } from "../../../../shared/core/UseCase";
import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID";

export class UpdateTodoUseCase implements UseCase<UpdateTodoRequestDTO, Todo> {
  constructor(private todoRepository: ITodoRepository) {}

  async execute(request: UpdateTodoRequestDTO): Promise<Todo> {
    const id = TodoId.create(new UniqueEntityID(request.id));
    let todo: Todo = await this.todoRepository.findById(id);

    const updateTodo = {
      id: request.id,
      title: request.title || todo.title.toString(),
      status: request.status || todo.status,
    };

    const updatedTodo = Todo.create(
      {
        title: TodoTitle.create(updateTodo.title),
        status: updateTodo.status as TodoStatus,
      },
      new UniqueEntityID(updateTodo.id)
    );

    await this.todoRepository.update(updatedTodo);

    console.log({ updatedTodo });
    return updatedTodo;
    //TODO implement errors
  }
}
