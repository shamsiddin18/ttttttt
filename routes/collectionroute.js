const controller = require('../controllers/collectionController')
var router = require('express').Router();

router.post('/', controller.addItem);

router.get('/', controller.getItems);

module.exports = router;
