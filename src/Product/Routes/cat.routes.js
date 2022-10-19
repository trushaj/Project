const { Router } = require('express');
const controller = require('../Controller/cat.controller');
const verify = require('./verifyToken');

const router = Router();

router.get('/', verify, controller.getCategory);

router.get('/:id', verify, controller.getCategoryById);

router.post('/', verify, controller.addCategory);

router.delete('/:id', verify, controller.removeCategory);

router.put("/:id", verify, controller.updateCategory);

module.exports = router;