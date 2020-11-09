const express = require('express');
const router = express.Router();

const QuestionsModel = require('../models/questionModel.js');

router.get("/", async (req, res) => {
    const questionsData = await QuestionsModel.getEverything();
    res.json(questionsData);
});

router.get("/javascript", async (req, res) => {
    const questionsData = await QuestionsModel.getJavascript();
    res.json(questionsData);
});

router.get("/react", async (req, res) => {
    const questionsData = await QuestionsModel.getReact();
    res.json(questionsData);
});

router.get("/python", async (req, res) => {
    const questionsData = await QuestionsModel.getPython();
    res.json(questionsData);
});

module.exports = router;
