const router = require('express').Router();
const controller = require('./controller');

// create
router.post('/', controller.save);
// read
router.get('/', controller.list);
router.get('/:id', controller.get);
// update
router.put('/:id', controller.update);
// delete
router.delete('/:id', controller.remove);

module.exports = router;
