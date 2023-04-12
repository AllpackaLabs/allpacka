
const express = require('express');

const userController = require('../controllers/userController');
const tripController = require('../controllers/tripController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController')

const tripRouter = express.Router();

// get a trip's info
tripRouter.get('/:trip_id',
    tripController.getTrip,
    (req, res) => {
    console.log('--Sending data from tripRouter.GET\'s anonymous func--');
    return res.status(200).json(res.locals); //
    }
);

// save a new trip
// this :_id is the user's _id
tripRouter.post('/create-trip/:user_id',
  tripController.createTrip,
  userController.updateUserTrips,
  (req, res) => {
    console.log('--Sending data from tripRouter.POST\'s anonymous func--');
    //res.locals keys
    //  -trip -> trip data from createTripPage (for loading on tripHomePage details)
    //  -updatedUser -> with updated user trips array
    //  -user_id -> user who created trip
    //  -trip_id -> the current trip_id (for redirect)
    return res.status(200).json(res.locals); // 
  }
);

//Takes a trip_id and a trip in body params. This trip is the current state of the trip from the frontend
// This route will replace the trip in the database with the trip provided in the params
tripRouter.patch('/update',
  tripController.updateTripDetails,
  (req, res) => {
    console.log('--Sending data from tripRouter.PATCH\'s anonymous func--');
    return res.status(200).json(res.locals.replacedTrip);
  }
);

/* Commented out functions in controller, so this one will throw an error if left uncommented
// update the trip's information
// this :_id is the trip's _id
tripRouter.patch('/:trip_id',
  tripController.updateTripUsers,
  tripController.updateTripItems,
  (req, res) => {
    console.log('--Sending data from tripRouter.PATCH\'s aynonmouns func--');
    return res.status(200).json(); //
  }
);
*/


// delete a trip : (
tripRouter.delete('/:trip_id',
tripController.deleteTrip,
  (req, res) => {
    console.log('--Sending data from tripRouter.DELETE\'s anonymous func--');
    return res.status(200).json(); // 
  }
);

// EXPORT THE ROUTER!!!
module.exports = tripRouter;