var express = require('express')
var router = express.Router()

//import db model
var Item = require('../db/models/Listitem')

//first route
//router.get('/', (req, res) => res.send(`yo`))

router.post('/item', (req, res) => {
    console.log('user post route hit')
    res.send('done')
})

module.exports = router;