import { InMemoryTodoRepository } from "./implementations/InMemoryTodoRepository";
import { InMongoTodoRepository } from "./implementations/InMongoTodoRepository";

const todoRepo = new InMemoryTodoRepository();
const mongoTodoRepo = new InMongoTodoRepository();

export { mongoTodoRepo, todoRepo };
