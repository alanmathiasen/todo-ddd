import { TodoDTO } from "../../dtos/TodoDTO";

export type UpdateTodoRequestDTO = Required<Pick<TodoDTO, "id">> & Partial<Omit<TodoDTO, "id">>;
