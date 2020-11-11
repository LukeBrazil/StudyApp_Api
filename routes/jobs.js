var express = require('express');
var router = express.Router();

router.get('/javascript', async (req, res) => {
   await axios.get('https://jobs.github.com/positions.json?description=javascript&location=us')
        .then(response => response.json())
        .then(data => {
        const jobsData = data;
        })
        res.json(jobsData)

})

module.exports = router;