const jwt = require('jsonwebtoken');

const secretKey = 'this-is-a-secret-key';
const cookieController = {};


//setSSIDCookie - store the user's databasse _id in a cookie and seesion db
cookieController.setSSIDCookie = (req, res, next) => {
	console.log('---We are in setSSIDCookie in cookieController.js----');
	// Create a JWT token
	const payload = {
		_id: res.locals._id,
	}
	// Sign the JWT token
	const token = jwt.sign(payload, secretKey, { expiresIn: '6h' });
  res.setHeader('Set-Cookie', `ssid=${token}; HttpOnly`);
  return next();
}

//JWT token is stored as a cookie in the user's browser as a value for the ssid cookie
//When user makes requests to a protected route, browser sends ssid cookie with the request, and
//the server can verify JWT stored in the cookie to authenticate user.

module.exports = cookieController;