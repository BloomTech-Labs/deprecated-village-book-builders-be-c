const createError = require('http-errors');
const jwt_decode = require('jwt-decode');
const restrictTo = (...roles) => (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  var decoded = jwt_decode(token);
  if (!roles.includes(decoded.role)) {
    next(createError(401, 'You are unauthorized to perform this action'));
  }
  next();
};

module.exports = restrictTo;
