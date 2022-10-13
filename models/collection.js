const objectClass = require('../classes/collection')
module.exports = (mongoose) => {
    const schema = new mongoose.Schema ({
        'name' : {
            type : String,
            required: true
        },
        'atmid' : {
            type : String,
            required : true
        }

    })
    schema.loadClass(objectClass)
    return mongoose.model('Show', schema)
}