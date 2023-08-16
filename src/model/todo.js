import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },
  description:{
    type:"string",
    required:true,
  },
  completed:{
    type:Boolean,
    required:true
  }
});

const todoModel = mongoose.model("todos", todoSchema);

export default todoModel;
