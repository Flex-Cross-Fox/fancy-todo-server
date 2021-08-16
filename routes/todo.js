const router = require('express').Router();
const todo = require('../controller/todo');

router.post('/', todo.addTodo);



module.exports = router;