const objectClass = require('../classes/test')
module.exports = (mongoose) => {
    const schema = new mongoose.Schema({
        'name': {
            type: String,
            required: true
        }
    })
    schema.loadClass(objectClass)
    return mongoose.model('Test', schema);
} 