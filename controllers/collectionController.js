const { Show } = require('../models')

exports.addItem = (req, res) => {
    Show.addItem(req.body).then(r => {
        res.send({ 'result' : 'OK' })
    }).catch(e => {
        res.send({ 'result' : 'WRONG ATMID' })
    })
}

exports.getItems = (req, res) => {
    Show.getItems().then(r => {
        res.send({ success: true, msg: r })
    }).catch(e => {
        res.send({ success: false, msg: e })
    })
}