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
  update: async (req, res) => {
    
    todoModal.find(req.body.id)
      const title = req.body.title;
      const description = req.body.description;
      const completed = req.body.completed;
      const todo = await todoModal.updateOne({ title,description,completed });
    return res.json({ message: "Todo updated", todo })
  },
  updateStatus: async(req, res)=>{
    //const {id} =todoModal.findById(req.params)// param return json object
    const id=req.params.id
    if(id){
      const completed = req.body.completed;
      const todo = await todoModal.updateOne({ completed });
      return res.status(200).json({ message: "Status updated", todo })
    }else{
      return res.status(403).json({message: "Bad request: ID not found!"})
    }
  },
  delete: async (req, res) => {

    const todoId = todoModal.find(req.body.id)
      const todo = await todoModal.deleteOne(todoId);
      return res.json({ message: "Todo deleted", todo })
  },
};

export default todoController;
