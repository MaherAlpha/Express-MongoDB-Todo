import { Router } from "express";
import todoController from "../controller/todo.js";

const todoRouter = new Router();
todoRouter.get("/todo", todoController.getAll);
todoRouter.post("/createTodo", todoController.create);
todoRouter.post("/updateTodo/:id",todoController.update);
todoRouter.post("/deleteTodo/:id",todoController.delete);
todoRouter.post("/updateTodoStatus/:id",todoController.updateStatus);

export default todoRouter;
