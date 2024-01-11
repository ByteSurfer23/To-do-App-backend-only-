const { Router } = require('express');
const { getTodo, saveToDo, updateToDo, deleteTodo} = require('../controller/controller');
const router = Router();

router.get('/', getTodo);
router.post('/save',saveToDo);
router.put('/update',updateToDo);
router.delete('/delete',deleteTodo);       
module.exports = router;
