const express = require('express');
const router = express.Router();

const UserModel = require('../models/usersModel');

router.get('/all', async (req, res) => {
  const allUsers = await UserModel.getAllUsers();
  res.json(allUsers).status(200)
})

module.exports = router;