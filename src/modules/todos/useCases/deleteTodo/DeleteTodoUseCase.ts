import { ITodoRepository } from "../../repos/ITodoRepository";
import { TodoId } from "../../domain/TodoId";
import { TodoDTO } from "../../dtos/TodoDTO";

export class DeleteTodoUseCase {
  constructor(private todoRepository: Partial<ITodoRepository>) {}

  async execute(request: TodoDTO): Promise<any> {
    const id: TodoId = TodoId.create(request.id);

    const deleted = await this.todoRepository.delete!(id);
    console.log(deleted);
    //TODO implement errors
  }
}
