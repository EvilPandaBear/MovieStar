
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    // TODO Passwort verschlüsseln bcrypt = require('bcrypt'),

var UserSchema = new Schema({
    username: { type: String, required: true, minlength: 5, index: { unique: true } },
    password: { type: String, required: true, minlength: 8 },
    email: { type: String, required: true, index: { unique: true } },
    date_of_birth: { type: Date, required: true },
    name: { type String, required: true, minlength: 3},
    is_admin: { type: Boolean, required: true, default: false }
});

module.exports = mongoose.model('User', UserSchema);
