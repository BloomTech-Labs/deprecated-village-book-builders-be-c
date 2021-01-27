const express = require('express');
const Mentees = require('./menteeModel');
const router = express.Router();
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
    const id = mentee.id || 0;
    try {
      await Mentees.findById(id).then(async (pf) => {
        if (pf == undefined) {
          //mentee not found so lets insert it
          await Mentees.create(mentee).then((mentee) =>
            res
              .status(200)
              .json({ message: 'mentee created', mentee: mentee[0] })
          );
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
