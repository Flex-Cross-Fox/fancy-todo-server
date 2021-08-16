const { Todo } = require('../models');
class TodoController{
    static addTodo(req, res){
        let { title, description, status, due_date } = req.body;
        let newTodo = { title, description, status, due_date };
        Todo.create(newTodo)
        .then((data) => {
            console.log(data);
            res.status(201).json(data)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err)
        })
    }
}

module.exports = TodoController;