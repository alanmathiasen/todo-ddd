import { ITodoRepository } from "../../repos/ITodoRepository";
import { Todo } from "../../domain/Todo";
import { TodoId } from "../../domain/TodoId";
import { TodoStatus } from "../../domain/TodoStatus";
import { TodoTitle } from "../../domain/TodoTitle";
import { TodoDTO } from "../../dtos/TodoDTO";
import { UseCase } from "../../../../shared/core/UseCase";
import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID";

export class CreateTodoUseCase implements UseCase<TodoDTO, void> {
  constructor(private todoRepository: ITodoRepository) {}

  async execute(request: TodoDTO): Promise<void> {
    const title: TodoTitle = TodoTitle.create(request.title);
    const status: TodoStatus = TodoStatus.create(request.status);
    const todo: Todo = Todo.create({ title, status }, new UniqueEntityID());
    await this.todoRepository.save(todo);
    //TODO implement errors
  }
}
