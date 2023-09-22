import { ITodoRepository } from "../ITodoRepository";
import { Todo } from "../../domain/entities/todoEntitie";
import { TodoId } from "../../domain/TodoId";
import TodoDB from "../../domain/models/todoModel";
import { mapDTO } from "../../mappers/mapDTO";

export class InMongoTodoRepository implements ITodoRepository {
  // tengo que implementar todos los metodos

  constructor() {
    // something
  }

  async save(todo: Todo): Promise<void> {}

  async update(todo: Todo): Promise<Todo> {
    return Promise.resolve(todo);
  }

  async findById(id: TodoId): Promise<any> {
    let doc = await TodoDB.findOne({ id: id.getValue().toString() });
    if (!doc) {
      throw new Error("Todo not found");
    }
    return Promise.resolve(Todo.fromDocument(doc));
  }

  async findAll(): Promise<Todo[]> {
    return Promise.resolve([]);
  }

  async find(todo: Todo): Promise<any[] | undefined> {
    const todoMapped = mapDTO.toDTO(todo);
    const found = await TodoDB.find(todoMapped);
    return Promise.resolve(found);
  }

  async delete(id: TodoId): Promise<void> {}

  async deleteAll(): Promise<void> {}
}
