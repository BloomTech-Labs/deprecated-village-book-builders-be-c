const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = '12345';

const User = require('./userModel');

router.get('/', (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).json({ message: 'invalid credentials' });
    });
});

router.post('/register', async (req, res, next) => {
  try {
    if (req.body) {
      const { email, password, role } = req.body;
      const user = {
        email,
        password: await bcrypt.hash(password, 6),
        role,
      };
      await User.create(user);
      res.status(201).json({ message: `${email} added` });
    }
  } catch (err) {
    next(err);
  }
});

router.post('/login', (req, res) => {
  //Login user
  const { email, password } = req.body;
  User.findBy({ email: email })
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        delete user.password;
        res.status(200).json({
          id: user.id,
          message: `Welome ${user.email}`,
          token,
        });
      } else {
        res.status(401).json({
          message: 'Invalid Credentials',
        });
      }
    })
    .catch(({ message }) => {
      res.status(500).json({
        message,
      });
    });
});
function generateToken(user) {
  //Header payload and verify signature
  const payload = {
    id: user.id,
    role: user.role,
  };
  //Token expiration
  const options = {
    expiresIn: '24h',
  };
  return jwt.sign(payload, JWT_SECRET, options);
}

// function verifyToken(token) {
//     return jwt.verify(token, JWT_SECRET, (err, decode) =>
//       decode !== undefined ? decode : err
//     );
//   }

module.exports = router;
