const mongoose = require('mongoose');
const { schema } = require('./userModel');
const Schema = mongoose.Schema;

// Users could also have a ninkname per trip? Food for thought.
// Somehow we forgot to have start and end dates lol
const tripSchema = new Schema({
    tripName: String,
    location: String,
    tripType: String, // example: car camping backpacking, etc These can later be refactored to their own schema but int he interest in time... -|_:)_/-
    date: Date, // not sure if there is a date type, look into
    users: [{
      user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }
    }], // this is an array of use _id's refrencing the user schema
    catagories: Array,
    review: String, // Could be comments. Possibly an array 
    photos: Array, // urls of photos stretch feature
  });
	/*
	categories [
		category 1: [item 1 {stuff inside} item 2]
		item 1 {

		}
		item 2 {

		}
		item 3 {

		}
	]

	const currentUser= user ex Sam
	if (item.user.includes(currentUser)) prioritize
  */

const Trip = mongoose.model('trip', tripSchema);

module.exports = Trip;


//Thoughts for later
/*

Will add this structure to trip items after more testing

// Every item only holds One user. The user that user has a ref
// to the userSchema
const itemSchema = new Schema({
  name: String, // name of the item
  number: Number, // how many we are bringing
  priority: Boolean, // stretch feature (how needed is the item)
  catagory: String, // This will be used to parse the DB data for displaying against the trip's catagories Array
  user: { // which user is bringing the item default 'null' until claimed
    username: String,
    id: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  }
})

const Item = mongoose.model('item', itemSchema);
*/