import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'Open',
    enum: ['Open', 'Closed'],
  },
});

const TodoDB = mongoose.model('Todo', todoSchema);

export default TodoDB;