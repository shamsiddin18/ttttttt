const controller = require('../controllers/collectioninfoController')
var router = require('express').Router();

router.post('/', controller.addItem)

router.get('/', controller.getItems)


module.exports = router