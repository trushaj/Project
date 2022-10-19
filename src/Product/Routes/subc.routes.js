const { Router } = require('express');
const controller = require('../Controller/subc.controller');
const verify = require('./verifyToken');

const router = Router();

router.get('/',verify, controller.getSubCategory);

router.get('/:id',verify, controller.getSubCategoryById);

router.post('/', verify,controller.addSubCategory);

router.delete('/:id',verify, controller.removeSubCategory);

router.put("/:id",verify, controller.updateSubCategory);

module.exports = router;