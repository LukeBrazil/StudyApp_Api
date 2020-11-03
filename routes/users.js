const express = require('express');
const router = express.Router();

const usersModel = require('../models/usersModel');

router.get('/all', async (req, res) => {
  const allUsers = await usersModel.getAllUsers();
  res.json(allUsers).status(200)
})

module.exports = router;