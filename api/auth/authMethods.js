const Users = require('../users/userModel');
const jwt = require('jsonwebtoken');
const SECRET_KEY = '123456789';
const expiresIn = '24h';

// Create a token from a payload
function createToken(payload) {
  payload = getUserData(payload);
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Retrieve User Id and role to send in JWT
async function getUserData({ email, password }) {
  try {
    console.log(password);
    const user = await Users.findBy({ email: email });
    const { id, role } = user;
    return { id, role };
  } catch (err) {
    console.log(err);
  }

  //   const { id, role} = userdb.user[userdb.user.findIndex(
  //     (user) => user.email === email && user.password === password
  //   )]
}

module.exports = { getUserData, createToken };
