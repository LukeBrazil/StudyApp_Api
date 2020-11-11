var express = require('express');
var router = express.Router();

router.get('/javascript', async (req, res) => {
    axios.get('https://jobs.github.com/positions.json?description=javascript&location=us')
        .then(response => response.json())
        const jobsData = response;
        res.json(jobsData)

})

module.exports = router;