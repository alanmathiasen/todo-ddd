import { Todo } from "../../../src/modules/todos/domain/entities/todoEntitie";
import { TodoId } from "../../../src/modules/todos/domain/TodoId";
import { ITodoRepository } from "../../../src/modules/todos/repos/ITodoRepository";

export class TodoRepositoryMock implements ITodoRepository {
  private todos: Map<string, Todo> = new Map<string, Todo>();
  save = jest.fn(async (todo: Todo) => {
    this.todos.set(todo.getId().getValue(), todo);
  });
  update = jest.fn(async (todo: Todo): Promise<Todo> => {
    const id = todo.getId().getValue();
    if (!this.todos.has(id)) {
      throw new Error(`Todo with id ${id} not found`);
    }
    this.todos.set(id, todo);
    return this.findById(todo.getId()) as Promise<Todo>;
  });
  findById = jest.fn(async (id: TodoId): Promise<Todo> => {
    const todo = this.todos.get(id.getValue());
    if (!todo) {
      throw new Error(`Todo with id ${id.getValue()} not found`);
    }
    return Promise.resolve(todo) as Promise<Todo>;
  });
  findAll = jest.fn(async (): Promise<Todo[]> => {
    return Promise.resolve(Array.from(this.todos.values()));
  });
  delete = jest.fn(async (id: TodoId): Promise<void> => {
    this.todos.delete(id.getValue());
  });
}
