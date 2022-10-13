class Info {
    static addItem(obj) {
        return new Promise((resolve, reject) => {
            var { CollectionList } = obj
            this.insertMany(CollectionList).then(r => {
                resolve(r)
            }).catch(e => {
                reject(e)
            })
        })
    }
    static getItems() {
        return new Promise((resolve, reject) => {
            this.find().then(r => {
                resolve(r)
            }).catch(e => {
                reject(e)
            })
        })
    }
}

module.exports = Info