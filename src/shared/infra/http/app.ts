import express from "express";
import { v1Router } from "./api/v1";
require('dotenv').config({ path: `.env` });

const app = express();

app.use(express.json());
app.use("/api/v1", v1Router);
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
