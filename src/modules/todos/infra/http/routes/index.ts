import express from "express";
import { createTodoController } from "../../../useCases/createTodo";
import { getTodoByIdController } from "../../../useCases/getTodoById";
import { updateTodoController } from "../../../useCases/updateTodo";
import { deleteTodoController } from "../../../useCases/deleteTodo";

const todosRouter = express.Router();

todosRouter.post("/", (req, res) => createTodoController.execute(req, res));
todosRouter.get("/:id", (req, res) => getTodoByIdController.execute(req, res));
todosRouter.put("/update/:id", (req, res) =>
  updateTodoController.execute(req, res)
);
todosRouter.delete("/delete/:id", (req, res) =>
  deleteTodoController.execute(req, res)
);

export { todosRouter };
