const express = require('express');
const router = require('router');

const usersModel = require('../models/usersModel');

router.get('/all', async (req, res) => {
  const allUsers = await usersModel.getAllUsers();
  res.json(allUsers).status(200)
})