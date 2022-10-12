var router = require('express').Router();

router.use('/test', require('./testRoute'))


module.exports = router