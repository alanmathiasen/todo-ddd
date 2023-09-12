import { ITodoRepository } from "../ITodoRepository";
import { Todo } from "../../domain/Todo";
import { TodoId } from "../../domain/TodoId";

export class InMemoryTodoRepository implements ITodoRepository {
  private todos: Map<string, Todo>;

  constructor() {
    this.todos = new Map<string, Todo>();
  }

  async save(todo: Todo): Promise<void> {
    this.todos.set(todo.getId().getValue(), todo);
    return Promise.resolve();
  }

  async update(todo: Todo): Promise<Todo> {
    const id = todo.getId().getValue();
    if (!this.todos.has(id)) {
      // TODO this could be extracted, lets see that later with proper error handling
      return Promise.reject(new Error(`Todo with id ${id} not found`));
    }
    this.todos.set(id, todo);
    return this.findById(todo.getId()) as Promise<Todo>;
  }

  async findById(id: TodoId): Promise<Todo> {
    const todo = this.todos.get(id.getValue());
    if (!todo) {
      // TODO this could be extracted, lets see that later with proper error handling
      return Promise.reject(
        new Error(`Todo with id ${id.getValue()} not found`)
      );
    }
    return Promise.resolve(todo) as Promise<Todo>;
  }

  async findAll(): Promise<Todo[]> {
    return Promise.resolve(Array.from(this.todos.values()));
  }

  async delete(id: TodoId): Promise<void> {
    this.todos.delete(id.getValue());
    return Promise.resolve();
  }
}
