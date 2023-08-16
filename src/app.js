import express from "express";
import todoRouter from "./router/todo.js";
import connectDB from "./config/db.js";
const app = express();
// connecting db
connectDB();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  return res.json({ message: "Hello world!" });
});

app.use(todoRouter);
app.listen(3301, () => {
  console.log("listening on 3301");
});
