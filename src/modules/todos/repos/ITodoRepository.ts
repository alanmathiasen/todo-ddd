import { Todo } from "../domain/Todo";
import { TodoId } from "../domain/TodoId";

export interface ITodoRepository {
  save(todo: Todo): Promise<void>;
  update(todo: Todo): Promise<Todo>;
  delete(id: TodoId): Promise<void>;
  findById(id: TodoId): Promise<Todo>;
  findAll(): Promise<Todo[]>;
}
