import { ITodoRepository } from "../ITodoRepository";
import { Todo } from "../../domain/entities/todoEntitie";
import { TodoId } from "../../domain/TodoId";
import TodoDB from "../../domain/models/todoModel"


export class inMongoTodoRepository implements ITodoRepository {
  // tengo que implementar todos los metodos

  constructor() {
    // something
  }

  async save(todo: Todo): Promise<void> {
    
  }

  async update(todo: Todo): Promise<Todo> {
    return Promise.resolve(todo);
  }

  async findById(id: TodoId): Promise<Todo> {
    let doc = await TodoDB.findById(id);
    if (!doc) {
      return Promise.reject(new Error('Todo not found'));
    }
    return Promise.resolve(Todo.fromDocument(doc));
  }

  async findAll(): Promise<Todo[]> {
    return Promise.resolve([]);
  }

  async delete(id: TodoId): Promise<void> {
    
  }

  async deleteAll(): Promise<void> {
    
  }
}