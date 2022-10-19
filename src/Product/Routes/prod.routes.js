const { Router } = require('express');
const controller = require('../Controller/prod.controller');
const verify = require('./verifyToken');

const router = Router();

router.get('/', verify, controller.getProduct);

router.get('/:id',verify, controller.getProductById);

router.post('/', verify,controller.addProduct);

router.delete('/:id', verify,controller.removeProduct);

router.put("/:id",verify, controller.updateProduct);

module.exports = router;