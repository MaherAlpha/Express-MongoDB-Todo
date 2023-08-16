import { Router } from "express";
import todoController from "../controller/todo.js";

const todoRouter = new Router();
todoRouter.get("/todo", todoController.getAll);
todoRouter.post("/createTodo", todoController.createOne);
todoRouter.post("/updateTodo",todoController.updateOne);

export default todoRouter;
