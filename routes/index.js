var express = require('express')
var router = express.Router()

//import db model
var Item = require('../db/models/Listitem')

//first route
//router.get('/', (req, res) => res.send(`yo`))

router.post('/item', (req, res) => {
    //console.log('req ' + JSON.stringify(req.body))

    //add user to db
    var item = new Item(req.body)

    item.save(function (err) {
        if (err) return handleError(err)

        console.log('item saved!')
    })

    res.send('done')
})

module.exports = router;