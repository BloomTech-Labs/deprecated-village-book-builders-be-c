const express = require('express');
const Mentors = require('./mentorModel');
const router = express.Router();
// // const restrictTo = require('../auth/restrictTo')
// const authenicate = require('../auth/authenticate-middleware');

router.get('/', function (req, res) {
  Mentors.findAll()
    .then((mentors) => {
      res.status(200).json(mentors);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.get('/:id', function (req, res) {
  const id = String(req.params.id);
  Mentors.findById(id)
    .then((mentor) => {
      if (mentor) {
        res.status(200).json(mentor);
      } else {
        res.status(404).json({ error: 'mentorNotFound' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post('/', async (req, res) => {
  const mentor = req.body;
  if (mentor) {
    const id = mentor.id || 0;
    try {
      await Mentors.findById(id).then(async (pf) => {
        if (pf == undefined) {
          //mentor not found so lets insert it
          await Mentors.create(mentor).then((mentor) =>
            res
              .status(200)
              .json({ message: 'mentor created', mentor: mentor[0] })
          );
        } else {
          res.status(400).json({ message: 'mentor already exists' });
        }
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: e.message });
    }
  } else {
    res.status(404).json({ message: 'mentor missing' });
  }
});

router.put('/:id', (req, res) => {
  const mentor = req.body;
  if (mentor) {
    const id = mentor.id || 0;
    Mentors.findById(id)
      .then(
        Mentors.update(id, mentor)
          .then((updated) => {
            res
              .status(200)
              .json({ message: 'mentor updated', mentor: updated[0] });
          })
          .catch((err) => {
            res.status(500).json({
              message: `Could not update mentor '${id}'`,
              error: err.message,
            });
          })
      )
      .catch((err) => {
        res.status(404).json({
          message: `Could not find mentor '${id}'`,
          error: err.message,
        });
      });
  }
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  try {
    Mentors.findById(id).then((mentor) => {
      Mentors.remove(mentor.id).then(() => {
        res
          .status(200)
          .json({ message: `mentor '${id}' was deleted.`, mentor: mentor });
      });
    });
  } catch (err) {
    res.status(500).json({
      message: `Could not delete mentor with ID: ${id}`,
      error: err.message,
    });
  }
});

module.exports = router;
