const Session = require('../models/sessionModel.js');
const jwt = require('jsonwebtoken');

const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return { 
    log: `sessionController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
    message: { err: `Error occurred in sessionController.${method}. Check server logs for more details.` }
  };
};

const secretKey = 'this-is-a-secret-key';
const sessionController = {};

//Verify whether or not the JWT token is valid
sessionController.isLoggedIn = (req, res, next) => {
  const { ssid } = req.cookies; 
	// Verify JWT token
	jwt.verify(ssid, secretKey, (err, decoded) => {
		// If JWT token is invalid or expired
		if (err) {
			console.log('Error verifying JWT token:', err);
			res.redirect('/login');
			return next();
		} else return next();
	});
};

module.exports = sessionController;