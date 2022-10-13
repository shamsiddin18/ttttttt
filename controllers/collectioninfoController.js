const { Info } = require('../models')


exports.addItem = (req, res) => {
    Info.addItem(req.body).then(r => {
        res.send({ 'ResultList': r.map(item => {return {atmid: item.atmid, 'results': 'OK'}})})
    }).catch(e => {

        res.send({ success: false, msg: e })
    })
}

exports.getItems = (req, res) => {
    Info.getItems().then(r => {
        res.send({ success: true, msg: r })
    }).catch(e => {
        res.send({ success: false, msg: e })
    })



}