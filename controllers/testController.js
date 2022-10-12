const { Test } = require('../models')


exports.addItem = (req, res) => {
    Test.addItem(req.body).then(r => {
        res.send({ success: true, msg: r })
    }).catch(e => {
        res.send({ success: false, msg: e })
    })
}

exports.getItems = (req, res) => {
    Test.getItems().then(r => {
        res.send({ success: true, msg: r })
    }).catch(e => {
        res.send({ success: false, msg: e })
    })
}
