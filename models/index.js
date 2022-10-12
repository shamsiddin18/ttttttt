const mongoose = require('mongoose');
const { mongoURL } = require('../conf')
const db = mongoose.connect(mongoURL).then(r => {
    console.log("Connected to mongoDB");
}).catch(e => {
    console.log(e);
});

db.Test = require('./test')(mongoose)

console.log(db);

module.exports = db