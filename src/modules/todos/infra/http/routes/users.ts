import express from "express";
import { createUserController } from "../../../../users/useCases";

const usersRouter = express.Router();

usersRouter.post("/", (req, res) => createUserController.execute(req, res));

export { usersRouter };
