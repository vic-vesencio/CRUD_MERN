const express = require('express');
const router = express.Router();

//Todo model
const Todo = require('../../models/Todo');

//@route GET todo
//@desc Get All todos
router.get('/', (req, res) => {
	Todo.find()
		.sort({ date: 1})
      .then(todos => res.json(todos));
});

//@route POST todos
//@desc add new todo
router.post('/', async(req, res) => {
	const newTodo = new Todo({
		description: req.body.description,
	});

	newTodo.save()
		.then(todo => res.json(todo))
		.catch(err => res.json(err));
});

//@route DELETE todo:id
//@desc delete todo
router.delete('/:id', (req, res) => {
	Todo.findById(req.params.id)
		.then(todos => todos.remove().then(() => res.json( {success: true })))
		.catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
