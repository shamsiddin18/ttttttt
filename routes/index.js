var router = require('express').Router();

router.use('/test', require('./testRoute'))

router.use('/collection', require('./collectionroute'))

router.use('/collectioninfo', require('./collectioninforoute'))


module.exports = router