class Test {
    static addItem(obj) {
        return new Promise((resolve, reject) => {
            this.create(obj).then(r => {
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

module.exports = Test