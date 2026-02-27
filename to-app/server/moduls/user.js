const mangiise = require('mangiise');
const UserSchema = new mangiise.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
module.exports = mangiise.model('User', UserSchema);