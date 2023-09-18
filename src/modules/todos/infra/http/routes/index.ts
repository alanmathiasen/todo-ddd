import express from "express";
import { createTodoController } from "../../../useCases/createTodo";
import { getTodoByIdController } from "../../../useCases/getTodoById";
import { updateTodoController } from "../../../useCases/updateTodo";
import { deleteTodoController, deleteAllController } from "../../../useCases/deleteTodo";

const router = express.Router();

router.post("/", (req, res) => createTodoController.execute(req, res));
router.get("/:id", (req, res) => getTodoByIdController.execute(req, res));
router.put("/update/:id", (req, res) => updateTodoController.execute(req, res));
router.delete("/delete/:id", (req, res) =>
  deleteTodoController.execute(req, res)
);
router.delete("/deleteAll", (req, res) => {
  deleteAllController.execute(req, res);
});

export { router };
