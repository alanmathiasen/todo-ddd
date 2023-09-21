import { Todo } from "../domain/entities/todoEntitie";
import { TodoId } from "../domain/TodoId";

export interface ITodoRepository {
  save(todo: Todo): Promise<void>;
  update(todo: Todo): Promise<Todo>;
  delete(id: TodoId): Promise<void>;
  find(todo: Partial<Todo>): Promise<Todo[]>;
  findById(id: TodoId): Promise<Todo>;
  findAll(): Promise<Todo[]>;
  deleteAll(): Promise<void>;
}
