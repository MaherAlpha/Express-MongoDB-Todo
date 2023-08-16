import todoModal from "../model/todo.js";

const todoController = {
  getAll: async (req, res) => {
    const todos = await todoModal.find();
    return res.json(todos);
  },
  getSingle: (req, res) => {
    const todo = todoModal.find();
    return res.json(todo);
  },
  create: async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const completed = req.body.completed;
    const todo = await todoModal.create({ title,description,completed });

    return res.json({ message: "Todo created", todo });
  },
  update: (req, res) => {
    console.log(req.body);
    return res.json({ message: "This is post request" });
  },
  delete: (req, res) => {
    console.log(req.body);
    return res.json({ message: "This is post request" });
  },
};

export default todoController;
