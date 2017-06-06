const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const userAPI = require('./index');

router.get('/:userId', (req, res) => {
  userAPI.get(req.params.userId)
    .then((user) => {
      // return some display page I guess
      return res.send(user);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send(err);
    });
});

router.post('/', (req, res) => {
  const userData = {
    ID: req.body.userId,
    role: req.body.role
  };
  
  userAPI.create(userData)
    .then((user) => {
      return res.json({ user: user });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send(err);
    });
});

module.exports = router;