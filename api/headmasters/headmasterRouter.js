const express = require('express');
const Headmasters = require('./headmasterModel');
const router = express.Router();
// const restrictTo = require('../auth/restrictTo')
// const authenicate = require('../auth/authenticate-middleware');

router.get('/', function (req, res) {
  Headmasters.findAll()
    .then((headmasters) => {
      res.status(200).json(headmasters);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.get('/:id', function (req, res) {
  const id = String(req.params.id);
  Headmasters.findById(id)
    .then((headmaster) => {
      if (headmaster) {
        res.status(200).json(headmaster);
      } else {
        res.status(404).json({ error: 'headmasterNotFound' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post('/', async (req, res) => {
  const headmaster = req.body;
  if (headmaster) {
    const id = headmaster.id || 0;
    try {
      await Headmasters.findById(id).then(async (pf) => {
        if (pf == undefined) {
          //headmaster not found so lets insert it
          await Headmasters.create(headmaster).then((headmaster) =>
            res.status(200).json({
              message: 'headmaster created',
              headmaster: headmaster[0],
            })
          );
        } else {
          res.status(400).json({ message: 'headmaster already exists' });
        }
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: e.message });
    }
  } else {
    res.status(404).json({ message: 'headmaster missing' });
  }
});

router.put('/:id', (req, res) => {
  const headmaster = req.body;
  if (headmaster) {
    const id = headmaster.id || 0;
    Headmasters.findById(id)
      .then(
        Headmasters.update(id, headmaster)
          .then((updated) => {
            res
              .status(200)
              .json({ message: 'headmaster updated', headmaster: updated[0] });
          })
          .catch((err) => {
            res.status(500).json({
              message: `Could not update headmaster '${id}'`,
              error: err.message,
            });
          })
      )
      .catch((err) => {
        res.status(404).json({
          message: `Could not find headmaster '${id}'`,
          error: err.message,
        });
      });
  }
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  try {
    Headmasters.findById(id).then((headmaster) => {
      Headmasters.remove(headmaster.id).then(() => {
        res.status(200).json({
          message: `headmaster '${id}' was deleted.`,
          headmaster: headmaster,
        });
      });
    });
  } catch (err) {
    res.status(500).json({
      message: `Could not delete headmaster with ID: ${id}`,
      error: err.message,
    });
  }
});

module.exports = router;
