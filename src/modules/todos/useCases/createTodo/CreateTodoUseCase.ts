import { ITodoRepository } from "../../repos/ITodoRepository";
import { Todo } from "../../domain/Todo";
import { TodoStatus } from "../../domain/TodoStatus";
import { TodoTitle } from "../../domain/TodoTitle";
import { TodoDTO } from "../../dtos/TodoDTO";
import { UseCase } from "../../../../shared/core/UseCase";
import { DomainEvents } from "../../../../shared/domain/events/DomainEvents";

export class CreateTodoUseCase implements UseCase<TodoDTO, void> {
  constructor(private todoRepository: ITodoRepository) {}

  async execute(request: TodoDTO): Promise<void> {
    const title: TodoTitle = TodoTitle.create(request.title);
    const status: TodoStatus = TodoStatus.create(request.status);
    const todo: Todo = Todo.create({ title, status });
    await this.todoRepository.save(todo);
    // Dispatch any domain events
    todo.domainEvents.forEach((event) => DomainEvents.dispatch(event));
    todo.clearEvents();
  }
  //TODO implement errors
}
