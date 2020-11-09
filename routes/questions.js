const express = require('express');
const router = express.Router();

const QuestionsModel = require('../models/questionModel.js');

router.get("/", async (req, res) => {
    const questionsData = await QuestionsModel.getEverything();
    res.json(questionsData);
});

module.exports = router;