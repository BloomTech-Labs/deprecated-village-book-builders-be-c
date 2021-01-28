const express = require('express');
const Teachers = require('./teacherModel');
const router = express.Router();
// // const restrictTo = require('../auth/restrictTo')
// const authenicate = require('../auth/authenticate-middleware');

router.get('/', function (req, res) {
  Teachers.findAll()
    .then((teachers) => {
      res.status(200).json(teachers);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.get('/:id', function (req, res) {
  const id = String(req.params.id);
  Teachers.findById(id)
    .then((teacher) => {
      if (teacher) {
        res.status(200).json(teacher);
      } else {
        res.status(404).json({ error: 'teacherNotFound' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post('/', async (req, res) => {
  const teacher = req.body;
  if (teacher) {
    const id = teacher.id || 0;
    try {
      await Teachers.findById(id).then(async (pf) => {
        if (pf == undefined) {
          //teacher not found so lets insert it
          await Teachers.create(teacher).then((teacher) =>
            res
              .status(200)
              .json({ message: 'teacher created', teacher: teacher[0] })
          );
        } else {
          res.status(400).json({ message: 'teacher already exists' });
        }
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: e.message });
    }
  } else {
    res.status(404).json({ message: 'teacher missing' });
  }
});

router.put('/:id', async (req, res) => {
  const teacher = req.body;
  const { id } = req.params;
  try {
    const confirmation = await Teachers.update(id, teacher);
    res.status(204).json(confirmation);
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: 'Could not update teacher',
    });
  }
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  try {
    Teachers.findById(id).then((teacher) => {
      Teachers.remove(teacher.id).then(() => {
        res
          .status(200)
          .json({ message: `teacher '${id}' was deleted.`, teacher: teacher });
      });
    });
  } catch (err) {
    res.status(500).json({
      message: `Could not delete teacher with ID: ${id}`,
      error: err.message,
    });
  }
});

module.exports = router;
