const controller = require('../controllers/testController')
var router = require('express').Router();

router.post('/', controller.addItem)

router.get('/', controller.getItems)


module.exports = router