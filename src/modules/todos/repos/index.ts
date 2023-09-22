import {
  InMemoryTodoRepository,
  InMongoTodoRepository,
} from "./implementations";

const todoRepo = new InMemoryTodoRepository();
const mongoTodoRepo = new InMongoTodoRepository();

export { mongoTodoRepo, todoRepo };
