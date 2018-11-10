var express = require('express')
var bodyParser = require('body-parser')

//initialize express application
var app = express()
var port = process.env.PORT || 8080

//initialize body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//first route
app.get('/', (req, res) => res.send(`yo` + req.body))


app.listen(port, () => console.log(`App listening on port ${port}`))