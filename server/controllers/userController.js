const User = require('../models/userModel.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const secretKey='This-is-a-secret-key';

// helper function to create fileController error objects
// return value will be the object we pass into next, invoking global error handler
const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return { 
    log: `userController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
    message: { err: `Error occurred in userController.${method}. Check server logs for more details.` }
  };
};

const userController = {};

// CREATE USER
userController.createUser = (req, res, next) => {
  console.log('---We are in createUser in userController.js--');

  const { username, password } = req.body; // verification will hash the password in DB
  // leaving it as user object in hopes that we add a nickname, and then put that in the object too
  // otherwise we could just send back res.locals.username = username
  res.locals.user = { username };

  const newUser = new User({ username, password });

  newUser.save()
    .then(savedUser => {
      res.locals.verified = true;
        // I'm guessing this was here as a redundancy check, but I also wanted to send the username in 
        // res.locals if verified = false in the error catch below, so I moved res.locals.user = username higher.
        // const { username } = savedUser;
        // res.locals.user = { username }; // removed sending password back, wouldn't want that unless you've got another thought in mind
        return next();
    })
    .catch((err) => {
      // Non-unique usernames will return promise status rejected and the error.name will match this string. 
      // This is important information for the user, so the middleware should continue. Frontend should
      // check verfied boolean in every /user/signup fetch respsonse and proceed accordingly
			console.log('Error object:', err);
  		console.log('Error name:', err.name);
  		console.log('Error message:', err.message);

      if (err.name === "MongoServerError") {
        //Just in case this error was thrown for another reason, we want to be able to read it.
        console.log(JSON.stringify(err));
        res.locals.verified = false;
        return next();
      }

      // If the error is from the POST body not including a username or password, the error 
      // will go here as err.name = "ValidationError". Any other error from the request should
      // also go here, including server connection failure related errors. Trying to post to the 
      // database without a good connection yielded err.name = "MongooseError"
        return next(createErr({
        method: 'createUser', 
        // method: `createUser ${JSON.stringify(err.name)}`,
        type: 'adding newUser to mongoDB data',
        err, 
        }));
    });
};

// GET USER
userController.getUser = (req, res, next) => {
  console.log('---We are in getUser in userController.js--');

  const { username } = req.body;
  // const { _id } = req.params;
  User.findOne({username: username})
  // User.findOneById(_id)
    .then(foundUser => {
      if (foundUser === null) {
        return next(createErr({
            method: 'addUser',
            type: 'retrieving mongoDB user data',
            err: `findOneById(${_id}) returned null`
        }));
      }

      const { username, trips } = foundUser;
      res.locals.user = { username, trips };
      return next();
    })
    .catch((err) => {
      return next(createErr({
        method: 'getUser',
        type: 'retrieving mongoDB user data',
        err, 
      }));
    });
}

// VERIFY USER
userController.verifyUser = async (req, res, next) => {
  console.log('---We are in verifyUser in userController.js--');
  const { username, password } = req.body;
  // Frontend POST body information inclusion error check. Passing undefined into either field will 
  // result the findOne method returning null, resulting in returning verified = false but this
  // check provides info to us that we messed up the POST body
  if (username === undefined || password === undefined) {
    next(createErr({
      method: 'verifyUser',
      type: 'getting user data from request body',
      err: 'userName and/or password weren\'t in req.body',
    }));
  }

  try {
    const foundUser = await User.findOne({ username });
		console.log('userdata', foundUser);
		//if no user found with that username
    if (foundUser === null) {
      res.locals.verified = false;
      console.log('no user found');
    } else {
			// Compare the request password with stored hashed password
			const match = await bcrypt.compare(password, foundUser.password);
			// console.log('match: ', match);
			if (match) {
				res.locals.verified = true;
				const { username, trips } = foundUser;
				res.locals.user = { username, trips };
				console.log('THIS IS RES>LOCALS>USER', res.locals.user);
				// Set JWT token for logged-in users
				const payload = {
					_id: foundUser._id,
				}
				console.log('payload', payload);
				const token = jwt.sign(payload, secretKey, { expiresIn: '6h' });
				console.log('token', token);
				res.setHeader('Set-Cookie', `ssid=${token}; HttpOnly}`);
			} else {
				res.locals.verified = false;
				console.log('matched not found')
			}
    }
    return next();
    
  } catch (err) {
    return next(createErr({
      method: 'getUser',
      type: 'retrieving mongoDB user data',
      err,
    }));
  }
}

//UPDATE USER TRIPS
userController.updateUserTrips = async (req, res, next) => {
  console.log('---We are in updateUserTrips in userController.js--');

  const user_id = req.body.user_id || res.locals.user_id;
  const trip_id = req.body.trip_id || res.locals.trip_id; // grab the trip
  const date = req.body.date || res.locals.trip.date  // grabs date of trip
  const tripName = req.body.tripName || res.locals.trip.tripName // grabs the name of the trip
  
  //TODO
  // Should either error check for trip_id, date, or tripName being undefined here or make them
  // required in the schema. We should at least check for trip_id, maybe the others are ok being null

  const filter = user_id;

  try {
    // find the user based on the Id
    const foundUser = await User.findById(filter).exec()

    if (foundUser === null) {
      return next(createErr({
          method: 'updateUserTrips',
          type: 'retrieving mongoDB user data',
          err: `findOneById(${user_id}) returned null`
      }));
    }

    foundUser.trips.push({ tripName, date, trip_id})
    const updatedUser = await foundUser.save();

    if (updatedUser === null) {
      return next(createErr({
          method: 'updateUserTrips',
          type: 'updating mongoDB user trips data',
          err: `findById(${filter}) returned null`
      }))
    }

    res.locals.updatedUser = updatedUser;
    return next();

  } catch (err) {
    return next(createErr({
      method: 'updateUserTrips',
      type: 'retrieving mongoDB user data or updating mongoDB user trips data',
      err, 
      }));
  }
}

// DELETE USER
userController.deleteUser = (req, res, next) => {
  console.log('---We are in deleteUser in userController.js----');

  const { _id } = req.params; 
  console.log(_id);

  User.findByIdAndDelete(_id)
    .then(student => {
      console.log(student);
      const { firstName, lastName, age } = student;
      res.locals.student = { firstName, lastName, age };
      return next();
    })
    .catch((err) => {
      return next(createErr({
        method: 'deleteUser',
        type: 'retrieving mongoDB data',
        err,
      }));
    });
};


// EXPORT THE Controllers!!!
module.exports = userController;