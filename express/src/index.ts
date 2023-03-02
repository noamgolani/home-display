import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express, { Express, Request, Response } from "express";

import todoRouter from "./routes/todo";

const app: Express = express();
const port = process.env["PORT"] || 3000;

app.use(express.static("public"));

app.use("/api/todo", todoRouter);

app.get("/", (_req: Request, res: Response) => {
  res.sendFile("public/index.html");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
