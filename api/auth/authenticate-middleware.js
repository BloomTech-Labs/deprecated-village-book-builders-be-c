/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler

*/
const jwt_decode = require('jwt-decode');
const jwt = require('jsonwebtoken');
module.exports = async (req, res, next) => {
  const authHeader = await req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  var decoded = jwt_decode(token);
  console.log(decoded);
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        // token is invalid
        res.status(401).json({ error: err });
      } else {
        // token is valid
        req.jwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ you: 'shall not pass!' });
  }
};
