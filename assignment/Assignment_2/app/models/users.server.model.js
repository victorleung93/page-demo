const { Int32 } = require('mongodb')
const mongoose = require('mongoose')

const passportLocalMongoose     = require('passport-local-mongoose')

const UserSchema = new mongoose.Schema(
    {
        firstname:  {type: String, require:true},
        lastname:   {type: String, require:true},
        phone:      {type: Number, require:true, unique: true},
        email:      {type: String, require:true, unique: true},
        username:   {type: String, require:true, unique: true},
        password:   {type: String, require:true}
    },
    {
        collection: 'users'
    }
)

let options = ({ missingPasswordError: 'Wrong / Missing Password' })
UserSchema.plugin(passportLocalMongoose, options)

module.exports = mongoose.model('UserSchema', UserSchema)