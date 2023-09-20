import express from "express";
import {
  /* getMongoTodoController,*/
  getMongoTodoByIdController,
} from "../../../../useCases/mongoDB/getTodoInMongo";
// import { postMongoTodoController } from "../../../../useCases/mongoDB/postTodoInMongo";
// import { putMongoTodoController } from "../../../../useCases/mongoDB/putTodoInMongo";
// import { deleteMongoTodoByIdController } from "../../../../useCases/mongoDB/deleteTodoInMongo";

const router = express.Router();

// router.get("/", getMongoTodoController);
router.get("/:id", (req,res) => getMongoTodoByIdController.execute(req,res));

// router.post("/", postMongoTodoController);

// router.put("/:id", putMongoTodoController);

// router.delete("/:id", deleteMongoTodoByIdController);

export { router };
