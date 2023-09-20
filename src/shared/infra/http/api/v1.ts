import express from "express";
import { router as memoryRouter } from "../../../../modules/todos/infra/http/routes/memory";
import { router as mongoRouter } from "../../../../modules/todos/infra/http/routes/mongoDB";

const v1Router = express.Router();

v1Router.get("/", (req, res) => {
  return res.json({ message: "Yo! we're up" });
});

v1Router.use("/todos", memoryRouter);
v1Router.use("/mongotodos", mongoRouter);

export { v1Router };
