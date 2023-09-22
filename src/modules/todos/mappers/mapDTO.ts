import { Todo } from "../domain/entities/todoEntitie";
import { TodoDTO } from "../dtos/TodoDTO";

export class mapDTO {
  public static toDTO(todo: Todo): TodoDTO {
    return {
      id: todo.getId().getValue(),
      title: todo.getTitle().getValue(),
      status: todo.getStatus()
    }
  }
}