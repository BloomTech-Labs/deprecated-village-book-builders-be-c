const express = require('express');
const Mentees = require('./menteeModel');
const router = express.Router();
const User = require('../users/userModel');
const bcrypt = require('bcryptjs');
// // const restrictTo = require('../auth/restrictTo')
// const authenicate = require('../auth/authenticate-middleware');

router.get('/', function (req, res) {
  Mentees.findAll()
    .then((mentees) => {
      res.status(200).json(mentees);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.get('/:id', function (req, res) {
  const id = String(req.params.id);
  Mentees.findById(id)
    .then((mentee) => {
      if (mentee) {
        res.status(200).json(mentee);
      } else {
        res.status(404).json({ error: 'menteeNotFound' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post('/', async (req, res) => {
  const mentee = req.body;
  if (mentee) {
    const userId = await User.getMaxId();
    const menteeId = await Mentees.getMaxId();
    const password = bcrypt.hashSync(mentee.password, 10);
    const newUser = {
      id: userId[0].max + 1,
      email: mentee.email,
      password,
      role: 'mentee',
    };
    const newMentee = {
      id: menteeId[0].max + 1,
      email: mentee.email,
      first_name: mentee['first_name'],
      last_name: mentee['last_name'],
      primary_language: mentee['primary_language'],
      dob: mentee.dob,
    };

    try {
      await Mentees.findBy({ email: mentee.email }).then(async (pf) => {
        if (!pf.length) {
          // mentee not found so lets insert it
          await User.create(newUser);
          const saveMentee = await Mentees.create(newMentee);
          res.status(200).json({ message: 'mentee created', saveMentee });
        } else {
          res.status(400).json({ message: 'mentee already exists' });
        }
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: e.message });
    }
  } else {
    res.status(404).json({ message: 'mentee missing' });
  }
});

router.put('/:id', (req, res) => {
  const mentee = req.body;
  if (mentee) {
    const id = mentee.id || 0;
    Mentees.findById(id)
      .then(
        Mentees.update(id, mentee)
          .then((updated) => {
            res
              .status(200)
              .json({ message: 'mentee updated', mentee: updated[0] });
          })
          .catch((err) => {
            res.status(500).json({
              message: `Could not update mentee '${id}'`,
              error: err.message,
            });
          })
      )
      .catch((err) => {
        res.status(404).json({
          message: `Could not find mentee '${id}'`,
          error: err.message,
        });
      });
  }
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  try {
    Mentees.findById(id).then((mentee) => {
      Mentees.remove(mentee.id).then(() => {
        res
          .status(200)
          .json({ message: `mentee '${id}' was deleted.`, mentee: mentee });
      });
    });
  } catch (err) {
    res.status(500).json({
      message: `Could not delete mentee with ID: ${id}`,
      error: err.message,
    });
  }
});

module.exports = router;
