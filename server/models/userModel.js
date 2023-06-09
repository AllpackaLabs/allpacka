const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 12;

// Each user has a user name, password, and an array of trips
// Stretch thought: User documents should include nicknames. That way if Mark is already in database, my name doesn't need to be "Mark6" on website
const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  trips: [{
    date: Date,
    tripName: String, // the is the name the user decides, not the name of the trip (default should is trip name)
    trip_id: [{
      type: Schema.Types.ObjectId,
      ref: 'trip', 
    }]
  }]
});

// // This is a pre-save hook that will hash the password before saving it to the database

userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    // generates a random salt value that is used to hash a password
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (err) {
    next(err);
  }
});




const User = mongoose.model('User', userSchema);

module.exports = User;