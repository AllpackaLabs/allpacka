const Trip = require('../models/tripModel.js');

// helper function to create fileController error objects
// return value will be the object we pass into next, invoking global error handler
const createErr = (errInfo) => {
    const { method, type, err } = errInfo;
    return { 
      log: `tripController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
      message: { err: `Error occurred in tripController.${method}. Check server logs for more details.` }
    };
};


const tripController = {};

// GET A TRIP'S DATA
tripController.getTrip = (req, res, next) => {
    console.log('---We are in getTrip in tripController.js--');

    const { trip_id } = req.params;

    Trip.findById(trip_id)
      .then(foundTrip => {
        //checks to see that trip was successfully found. If trip_id didn't match a trip in the database
        //it'll return null but it won't throw an error, the promise status will be fulfilled, not rejected
        if (foundTrip === null) {
          return next(createErr({
              method: 'getTrip',
              type: 'retrieving Trip mongoDB data',
              err: `findById(${trip_id}) returned null`
          }));
        }

        const { 
          tripName, location,
          tripType, date, items,
          users, categories, review,
          photos, id } = foundTrip

        res.locals.trip = { 
          tripName, location,
          tripType, date, items,
          users, categories, review,
          photos, id };

        return next();
      })
      .catch((err) => {
        return next(createErr({
          method: 'getTrip',
          type: 'retrieving Trip mongoDB data',
          err, 
        }));
      });
}

// CREATE A NEW TRIP
tripController.createTrip = (req, res, next) => {
  console.log('---We are in createTrip in tripController.js--');
  const {
    location,
    date,
    tripName,
		user_id
    } = req.body; 
  
  // to be used in next peice of middleware
  res.locals.user_id = user_id
      
  const newTrip = new Trip({location, date, tripName, users: [user_id] });
	// console.log('new Trip from tripController.createTrip', newTrip);
  newTrip.save()
      .then(savedTrip => {
        // res.locals.trip_id = savedTrip._id.toString(); // used for updating the user's trips array (next middleware)
        res.locals.trip = savedTrip; // grabs the _id and send to new URL
        return next();
      })
      .catch((err) => {
          return next(createErr({
          method: 'addTrip',
          type: 'adding newTrip to mongoDB data',
          err, 
          }));
      });
  // return next();
};


// // ADD CATEGORIES TO TRIP
// tripController.addCategories = async (req, res, next) => {
// 	console.log('---We are in addCategories in tripController.js--');
// 	const { trip_id } = req.params;
// 	const { categoryName } = req.body;
// 	Trip.findById(trip_id)
// 		try {
// 			(foundTrip => {
// 			//error handler for if the trip doesn't exist
// 			if (foundTrip === null) {
// 				return next(createErr({
//           method: 'addCategories',
//           type: 'retrieving Trip before updated mongoDB data',
//           err: `findById(${trip_id}) returned null`
// 				}));
// 			}
// 			//error handler in case the category already exists
// 			if (foundTrip.categories.categoryName) {
// 				return next(createErr({
// 					method: 'addCategories',
// 					type: 'categoryName already exists',
// 					err: `the category ${categoryName} already exists`
// 				}))
// 			}

// 			//if the category doesn't exist, add it to the categories object with value of empty array
// 			foundTrip.categories.categoryName = [];
// 			const updatedTrip = await foundTrip.save();

// 			if (updatedTrip === null) {
// 				return next(createErr({
//           method: 'addCategories',
//           type: 'retrieving updatedTrip before updated mongoDB data',
//           err: `updatedTrip returned null`
// 				}));
// 			}
// 			res.locals.updatedTrip = updatedTrip;
// 			return next();
// 		})
// 		.catch((err) => {
//       return next(createErr({
//         method: 'createCategory',
//         type: 'creatingCategory error',
//         err,
//       }));
//     });
// }

// // DELETE CATEGORY (in the front end, please add a warning that all items in the category will be deleted as well)
// tripController.deleteCategory = async (req, res, next) => {
// 	console.log('---We are in deleteCategory in tripController.js--');
// 	const { trip_id } = req.params;
// 	const { categoryName } = req.body;
// 	Trip.findbyId(trip_id)
// 		.then(foundTrip => {
// 			//error handler for if the trip doesn't exist
// 			if (foundTrip === null) {
// 				return next(createErr({
// 					method: 'addCategories',
// 					type: 'retrieving Trip before updated mongoDB data',
// 					err: `findById(${trip_id}) returned null`
// 				}));
// 			}
			
// 			delete foundTrip.categories.categoryName;
// 			const updatedTrip = await foundTrip.save();

// 			if (updatedTrip === null) {
// 				return next(createErr({
//           method: 'addCategories',
//           type: 'retrieving updatedTrip before updated mongoDB data',
//           err: `updatedTrip returned null`
// 				}));
// 			}
// 			res.locals.updatedTrip = updatedTrip;
// 			return next();
// 		})
// 		.catch((err) => {
//       return next(createErr({
//         method: 'createCategory',
//         type: 'creatingCategory error',
//         err,
//       }));
			
// 		})
// }




// Stretch Feature
// Only the current user that is logged in can join a trip.
// They join a trip by adding a trip to there trip array
tripController.updateTripUsers = async (req, res, next) => {
  console.log('---We are in updateTripUsers in tripController.js--');

  const { user_id } = req.body;

  if (req.body.updateUser) {
    const { trip_id } = req.params;  // grab the trip
    const filter = trip_id;

    try {
      // find the user based on the Id
      const foundTrip = await Trip.findById(filter)
      //checks to see that trip was successfully found. If trip_id didn't match a trip in the database
      //it'll return null but it won't throw an error, the promise status will be fulfilled, not rejected
      if (foundTrip === null) {
        return next(createErr({
            method: 'updateTripUsers',
            type: 'retrieving Trip before updated mongoDB data',
            err: `findById(${trip_id}) returned null`
        }));
      }

      foundTrip.users.push({ user_id: user_id });
      const updatedTrip = await foundTrip.save();

      if (updatedTrip === null) {
        return next(createErr({
          method: 'updateTripUsers',
          type: 'updating Trip mongoDB data',
          err: `foundTrip.save(${trip_id}) returned null`
      }));
      }

/*
      // grab user's trips array
      const { users } = foundTrip;
      // update trip with the newly created trip (last middleware)
      users = [...users, { id: user_id }];
      // update the databasse witht the new trips array
      const update = { users: users }
      const updatedTrip = Trip.findOneAndUpdate({ _id: filter }, update, { new: true })
*/

      res.locals.updatedTrip = updatedTrip;      
      return next();
    } catch (err) {
      return next(createErr({
        method: 'updateTripUsers',
        type: 'adding newUser to mongoDB data',
        err,
      }));
    }
  } else return next();
}


//So this is kind the worst, but I want to get us to the point where we can actually use the app by showtime.
// feel free to do this the less risky way by updating one property at a time after everything else is working.
// https://www.mongodb.com/docs/manual/reference/operator/update/

//Tested and it works!
tripController.updateTripDetails = async (req, res, next) => {

  const { trip_id, trip } = req.body

  const filter = { _id: trip_id };
  const update = trip;

  try {
    const replacedTrip = await Trip.findOneAndReplace(filter, update, { upsert: true, new: true })
  
    if (replacedTrip === null) {
      return next(createErr({
        method: 'updateTripDetails',
        type: 'retrieving and updating Trip mongoDB data',
        err: `findOneAndReplace(${trip_id}) returned null`
    }));
    }
    
    res.locals.replacedTrip = replacedTrip;
    return next();
    
  } catch (err) {
    return next(createErr({
      method: 'updateTripDetails',
      type: 'updating Trip to mongoDB data',
      err, 
      }));
  }
}

// TODO
 // ADD MIDDLEWARE TO DELETE TRIP
tripController.deleteTrip = (req, res, next) => {
    console.log('---We are in deleteTrip in tripController.js----');

    const { _id } = req.params;

    Trip.findByIdAndDelete(_id)
    .then(trip => {
      const { 
          location, type,
          date, items,
          users, catagories, review,
          photos } = trip

      res.locals.trip = { 
          location, type,
          date, items,
          users, catagories, review,
          photos };

      return next();
    })
    .catch((err) => {
      return next(createErr({
        method: 'getTrip',
        type: 'retrieving Trip mongoDB data',
        err, 
      }));
    });
};

// EXPORT THE Controllers!!!
module.exports = tripController;