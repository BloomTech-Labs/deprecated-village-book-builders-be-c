const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

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
      const hashedPassword = await bcrypt.hashSync(password, 10);
      const user = {
        email,
        password: hashedPassword,
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
      console.log(user);
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign(
          { id: user.id, role: user.role },
          process.env.JWT_SECRET,
          {
            expiresIn: 86400, // expires in 24 hours
          }
        );
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

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  try {
    User.findById(id).then((user) => {
      User.remove(user.id).then(() => {
        res
          .status(200)
          .json({ message: `user '${id}' was deleted.`, user: user });
      });
    });
  } catch (err) {
    res.status(500).json({
      message: `Could not delete user with ID: ${id}`,
      error: err.message,
    });
  }
});

// function verifyToken(token) {
//     return jwt.verify(token, JWT_SECRET, (err, decode) =>
//       decode !== undefined ? decode : err
//     );
//   }

module.exports = router;
