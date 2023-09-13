import { TodoDTO } from "./TodoDTO";

export class TodoValidator {
  static sanitizeAndValidate(todo: TodoDTO): TodoDTO {
    // Sanitization
    todo.title = todo.title.replace(/<[^>]*>/g, ''); // Remove any HTML tags

    // Validation
    const titleIsValid = typeof todo.title === 'string' && todo.title.trim() !== '';
    const statusIsValid = todo.status === 'OPEN' || todo.status === 'COMPLETED';

    if (!titleIsValid || !statusIsValid) {
      throw new Error("Invalid TodoDTO");
    }

    return todo;
  }
}
