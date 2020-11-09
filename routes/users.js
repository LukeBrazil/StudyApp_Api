const express = require('express');
const { route } = require('.');
const router = express.Router();

const UserModel = require('../models/usersModel');

// Get All Users
router.get('/', async (req, res) => {
  const users = await UserModel.find({});
  res.json(users);
})


// Get All Users by ID

router.get('/:id', async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  res.json(user).status(200)
});


//Create User
router.post('/', async (req, res) => {
  const user = await UserModel.create(req.body);
  res.json(user)
});

// Delete User by ID
router.delete('/:id', async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  user.remove();
  res.json(user);
});

module.exports = router;