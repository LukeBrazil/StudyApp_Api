const express = require('express');
const router = express.Router();

const Category = require('../models/categoryModel.js');

router.get("all", async (req, res) => {
    const categoryData = await Category.getAllCategories();
    res.json(categoryData);
});




module.exports = router;
