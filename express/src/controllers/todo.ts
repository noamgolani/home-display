import { RequestHandler } from "express";
import { v4 as uuid } from "uuid";

const todos = [
  {
    id: "1",
    text: "Learn TypeScript",
    done: false,
  },
];

export const getAllTodos: RequestHandler = (_req, res) => {
  res.json(todos);
};

export const addSingleTodo: RequestHandler<
  any,
  any,
  {
    text: string;
  }
> = (req, res) => {
  const { text } = req.body;
  const newTodo = {
    id: uuid(),
    text,
    done: false,
  };
  todos.push(newTodo);
  res.json(newTodo);
};

export const updateSingleTodo: RequestHandler<{
  id: string;
}> = (req, res, next) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex < 0) {
    next(new Error("Could not find todo!"));
  }
  todos[todoIndex]!.done = !todos[todoIndex]!.done;
  res.json(todos[todoIndex]);
};

export const deleteSingleTodo: RequestHandler<{
  id: string;
}> = (req, res, next) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex < 0) {
    next(new Error("Could not find todo!"));
  }
  todos.splice(todoIndex, 1);
  res.send("Todo deleted!");
};
