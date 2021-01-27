const express = require('express');
const Villages = require('./villageModel');
const router = express.Router();
// // const restrictTo = require('../auth/restrictTo')
// const authenicate = require('../auth/authenticate-middleware');

router.get('/', function (req, res) {
  Villages.findAll()
    .then((villages) => {
      res.status(200).json(villages);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.get('/:id', function (req, res) {
  const id = String(req.params.id);
  Villages.findById(id)
    .then((village) => {
      if (village) {
        res.status(200).json(village);
      } else {
        res.status(404).json({ error: 'villageNotFound' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post('/', async (req, res) => {
  const village = req.body;
  if (village) {
    const id = village.id || 0;
    try {
      await Villages.findById(id).then(async (pf) => {
        if (pf == undefined) {
          //village not found so lets insert it
          await Villages.create(village).then((village) =>
            res
              .status(200)
              .json({ message: 'village created', village: village[0] })
          );
        } else {
          res.status(400).json({ message: 'village already exists' });
        }
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: e.message });
    }
  } else {
    res.status(404).json({ message: 'village missing' });
  }
});

router.put('/:id', (req, res) => {
  const village = req.body;
  if (village) {
    const id = village.id || 0;
    Villages.findById(id)
      .then(
        Villages.update(id, village)
          .then((updated) => {
            res
              .status(200)
              .json({ message: 'village updated', village: updated[0] });
          })
          .catch((err) => {
            res.status(500).json({
              message: `Could not update village '${id}'`,
              error: err.message,
            });
          })
      )
      .catch((err) => {
        res.status(404).json({
          message: `Could not find village '${id}'`,
          error: err.message,
        });
      });
  }
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  try {
    Villages.findById(id).then((village) => {
      Villages.remove(village.id).then(() => {
        res
          .status(200)
          .json({ message: `village '${id}' was deleted.`, village: village });
      });
    });
  } catch (err) {
    res.status(500).json({
      message: `Could not delete village with ID: ${id}`,
      error: err.message,
    });
  }
});

module.exports = router;
