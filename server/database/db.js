import mongoose from 'mongoose'

const url = "mongodb://localhost:27017/Todo-List";
mongoose.connect(url)
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const todoSchema = new mongoose.Schema ({
    activity: String
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;