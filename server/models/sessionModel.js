const mongoose = require('mongoose');
const Schema = mongoose.Schema;

///////////////// Stretch Features ///////////////////////
const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 600, default: Date.now }
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;