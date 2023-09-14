import { TodoStatusValues } from "../domain/TodoStatus";

export interface TodoDTO {
  id: string;
  title: string;
  status: TodoStatusValues;
}
