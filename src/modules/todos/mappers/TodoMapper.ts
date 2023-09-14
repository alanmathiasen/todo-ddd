import { Todo } from "../domain/Todo";
import { TodoDTO } from "../dtos/TodoDTO";

export class TodoMapper {
  public static toDTO(todo: Todo): TodoDTO {
    return {
      id: todo.getId().toString(),
      title: todo.title.value,
      status: todo.status.value,
    };
  }
}
