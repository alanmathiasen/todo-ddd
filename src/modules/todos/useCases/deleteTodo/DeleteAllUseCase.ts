import { ITodoRepository } from "../../repos/ITodoRepository";

export class DeleteAllUseCase {
  constructor(private todoRepository: Partial<ITodoRepository>) {}

  async execute(): Promise<any> {
    await this.todoRepository.deleteAll!();

    console.log('Todo borrado');
    //TODO implement errors
  }
}
