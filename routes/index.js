var express = require('express')
var router = express.Router()

//first route
router.get('/', (req, res) => res.send(`yo`))

module.exports = router;