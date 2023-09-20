import { TodoId } from "../../../src/modules/todos/domain/TodoId";
import { Todo } from "../../../src/modules/todos/domain/entities/todoEntitie";
import TodoDB from "../../../src/modules/todos/domain/models/todoModel";
import { ITodoRepository } from "../../../src/modules/todos/repos/ITodoRepository";

export class MongoTodoRepositoryMock implements ITodoRepository {
  // tengo que implementar todos los metodos

  constructor() {
    // something
  }

  async save(todo: Todo): Promise<void> {}

  async update(todo: Todo): Promise<Todo> {
    return Promise.resolve(todo);
  }

  findById = jest.fn(async (id: TodoId): Promise<any> => {
    let doc = await TodoDB.findOne({id: id.getValue().toString()});
    if (!doc) {
      throw new Error("Todo not found");
    }
    return Promise.resolve(Todo.fromDocument(doc));
  })

  async findAll(): Promise<Todo[]> {
    return Promise.resolve([]);
  }

  async delete(id: TodoId): Promise<void> {}

  async deleteAll(): Promise<void> {}
}
