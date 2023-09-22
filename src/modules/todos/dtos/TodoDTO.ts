import { TodoStatusValues } from "../domain/TodoStatus";

export interface TodoDTO {
  title: string;
  status?: TodoStatusValues;
}
