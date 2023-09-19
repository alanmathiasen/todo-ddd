import express from "express";
import { createTodoController } from "../../../../useCases/memory/createTodoInMemory";
import { getTodoByIdController } from "../../../../useCases/memory/getTodoByIdInMemory";
import { updateTodoController } from "../../../../useCases/memory/updateTodoInMemory";
import {
  deleteTodoController,
  deleteAllController,
} from "../../../../useCases/memory/deleteTodoInMemory";

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
