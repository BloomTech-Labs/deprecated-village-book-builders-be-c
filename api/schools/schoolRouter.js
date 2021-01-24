const express = require('express');
const Schools = require('./schoolModel');
const router = express.Router();
// // const restrictTo = require('../auth/restrictTo')
// const authenicate = require('../auth/authenticate-middleware');

router.get('/', function (req, res) {
  Schools.findAll()
    .then((schools) => {
      res.status(200).json(schools);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.get('/:id', function (req, res) {
  const id = String(req.params.id);
  Schools.findById(id)
    .then((school) => {
      if (school) {
        res.status(200).json(school);
      } else {
        res.status(404).json({ error: 'schoolNotFound' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post('/', async (req, res) => {
  const school = req.body;
  if (school) {
    const id = school.id || 0;
    try {
      await Schools.findById(id).then(async (pf) => {
        if (pf == undefined) {
          //school not found so lets insert it
          await Schools.create(school).then((school) =>
            res
              .status(200)
              .json({ message: 'school created', school: school[0] })
          );
        } else {
          res.status(400).json({ message: 'school already exists' });
        }
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: e.message });
    }
  } else {
    res.status(404).json({ message: 'school missing' });
  }
});

router.put('/:id', (req, res) => {
  const school = req.body;
  if (school) {
    const id = school.id || 0;
    Schools.findById(id)
      .then(
        Schools.update(id, school)
          .then((updated) => {
            res
              .status(200)
              .json({ message: 'school updated', school: updated[0] });
          })
          .catch((err) => {
            res.status(500).json({
              message: `Could not update school '${id}'`,
              error: err.message,
            });
          })
      )
      .catch((err) => {
        res.status(404).json({
          message: `Could not find school '${id}'`,
          error: err.message,
        });
      });
  }
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  try {
    Schools.findById(id).then((school) => {
      Schools.remove(school.id).then(() => {
        res
          .status(200)
          .json({ message: `school '${id}' was deleted.`, school: school });
      });
    });
  } catch (err) {
    res.status(500).json({
      message: `Could not delete school with ID: ${id}`,
      error: err.message,
    });
  }
});

module.exports = router;
