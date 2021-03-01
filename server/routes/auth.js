var express = require('express');
var router = express.Router();

router.get('/login', (req, res) => {
    res.send({message: 'success'})
});

module.exports = router;