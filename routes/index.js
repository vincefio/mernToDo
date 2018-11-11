var express = require('express')
var router = express.Router()

//import db model
var Item = require('../db/models/Listitem')

//first route
router.get('/items', (req, res) => {

    /*Item.find()
        .then(items => res.json(items))*/
    let results = '';

    Item.find({}, function (err, res) {
        results = res;
    })
        .then(function () {
            // console.log('results ' + results)
            res.send(results)
        })

})

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