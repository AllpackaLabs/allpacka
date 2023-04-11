const { Session } = require('../models/sessionModel.js');

const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return { 
    log: `sessionController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
    message: { err: `Error occurred in sessionController.${method}. Check server logs for more details.` }
  };
};

const sessionController = {};

/**
* isLoggedIn - find the appropriate session for this request in the database, then
* verify whether or not the session is still valid.
*/


sessionController.isLoggedIn = (req, res, next) => {
  
  const { ssid } = req.cookies; 
  // console.log(req.cookies)
  Session.findOne({cookieId: ssid})
    .then(data => {
      // console.log('isLoggedIn data: ',data)
      // const time = Date.now() - data.createdAt;
      // if (time < 30)
      if (data) {
        return next()
      } else {
        res.redirect('/signup')
      }
    })
    .catch((err) => {
      return next(createErr({
        method: 'isLoggedIn',
        type: 'ERROR staying logged in',
        err,
      }));
    });
};

/**
* startSession - create and save a new Session into the database.
*/
sessionController.startSession = (req, res, next) => {
  //write code here
  const currSession = new Session({cookieId: res.locals._id})
  currSession.save()
    .then(data => { 
      // console.log('Session Saved: ', data)
      res.locals.sesh = data;
      return next();
    })
    .catch((err) => {
      return next(createErr({
        method: 'startSession',
        type: 'adding new session to mongoDB data',
        err,
      }));
    });
};

module.exports = sessionController;