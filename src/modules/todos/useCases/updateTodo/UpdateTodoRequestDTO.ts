import { TodoDTO } from "../../dtos/TodoDTO";

export type UpdateTodoRequestDTO = Required<{ id: string }> & Partial<TodoDTO>;
