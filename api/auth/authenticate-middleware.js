/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler

*/

const jwt = require('jsonwebtoken');
const JWT_SECRET = '12345';
module.exports = async (req, res, next) => {
  console.log(req);
  const token = await req.get('authorization');
  console.log(token);
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        // token is invalid
        res.status(401).json({ you: "Cant't touch this!" });
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
