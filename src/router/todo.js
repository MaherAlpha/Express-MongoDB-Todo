import { Router } from "express";
import todoController from "../controller/todo.js";

const todoRouter = new Router();
todoRouter.get("/todo", todoController.getAll);
todoRouter.post("/createTodo", todoController.create);

export default todoRouter;
