const createError = require('http-errors');
const jwt_decode = require('jwt-decode');
const restrictTo = (...roles) => (req, res, next) => {
  const token = req.header.authorization;
  const role = jwt_decode(token);
  console.log(req);
  if (!roles.includes(role)) {
    next(createError(401, 'You are unauthorized to perform this action'));
  }
  next();
};

module.exports = restrictTo;
