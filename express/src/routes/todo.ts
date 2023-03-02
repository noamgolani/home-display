import express from "express";
import {
  addSingleTodo,
  deleteSingleTodo,
  getAllTodos,
  updateSingleTodo,
} from "../controllers/todo";
const todoRouter = express.Router();

// Get All Todo's
todoRouter.get("/", getAllTodos);

// Add Single Todo
todoRouter.post("/", addSingleTodo);

// // Update Single Todo
todoRouter.put("/:id", updateSingleTodo);

// // Delete Single Todo
todoRouter.delete("/:id", deleteSingleTodo);

export default todoRouter;
