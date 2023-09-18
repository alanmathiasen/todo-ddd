import express from "express";
import { router } from "../../../../modules/todos/infra/http/routes";

const v1Router = express.Router();

v1Router.get("/", (req, res) => {
  return res.json({ message: "Yo! we're up" });
});

v1Router.use("/todos", router);

export { v1Router };
