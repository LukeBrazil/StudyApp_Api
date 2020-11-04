const express = require('express');
const { route } = require('.');
const router = express.Router();

const UserModel = require('../models/usersModel');

// Get All Users


// Get All Users by ID

router.get('/:id', async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  res.json(user).status(200)
});


//Create User
router.post('/', async (req, res))









module.exports = router;