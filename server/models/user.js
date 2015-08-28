var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type: String, required: true, index: {unique: true} },
    links: []
});

module.exports = mongoose.model('User', UserSchema);