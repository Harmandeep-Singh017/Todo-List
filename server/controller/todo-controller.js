import todoCollection from "../model/Todo.js";

export const addTodo = async (req, res) => {
    try {
        console.log(req.body);
        const newTodo = await todoCollection.create({
            data: req.body.data,
            createdAt: Date.now()
        })
    
        await newTodo.save();
        res.status(200).json(newTodo);
        
    } catch (error) {
        return res.status(500).json(error.message);
    }
}


export const getAllTodos = async (request, response) => {
    try {
        const todos = await todoCollection.find({}).sort({ 'createdAt': -1 })

        return response.status(200).json(todos);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}


export const toggleTodoDone = async (request, response) => {
    try {
        const todoRef = await todoCollection.findById(request.params.id);

        const todo = await todoCollection.findOneAndUpdate(
            { _id: request.params.id },
            { done: !todoRef.done }
        )

        await todo.save();

        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
