const config = require('./env/development')
const mongoose = require('mongoose')

module.exports = function() {
    const db = mongoose.connect(config.db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log(config.db + ' || MongoDB Connection Successful!')
        })
        .catch((error) => {
            console.log(error)
        })
    return db
}