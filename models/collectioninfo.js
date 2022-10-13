const objectClass = require('../classes/collectioninfo')
module.exports = (mongoose) => {
    const schema = new mongoose.Schema({
        
            'atmid': {
                type: String,
                required: true
            },
            'event' : {
                type: String,
                required: true
            },
            'collect_dttm' : {
                type: String,
                required: true
            },
            'collect_prev_dttm' : {
                type: String,
                required: true
            },
            'BeforeCollectionInfo' : {
                type: Object,
                required: true
            },
            'AfterCollectionInfo' : {
                type: Object,
                required: true
            }
        
    })
    schema.loadClass(objectClass)
    return mongoose.model('Info', schema);
}