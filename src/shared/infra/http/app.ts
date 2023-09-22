import express from "express";
import { v1Router } from "./api/v1";
import { DomainEventHandler, IDomainEvent } from "../../domain/events/DomainEvents";
import { TodoCreated } from "../../../modules/todos/domain/events/todoCreated";
import { TodoMapper } from "../../../modules/todos/mappers/TodoMapper";

const app = express();
DomainEventHandler.register("TodoCreated", (event: IDomainEvent) => {
  if (event instanceof TodoCreated) {
    console.log("event dispatched for todo: ");
    console.log(TodoMapper.toDTO(event.todo));
    console.log("event happened on: ", event.ocurrenceDate);
    console.log(event.getAggregateId());
  }
});
app.use(express.json());
app.use("/api/v1", v1Router);
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
