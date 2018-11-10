var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

//initialize express application
var app = express()
var port = process.env.PORT || 8080

//initialize body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//include routes
var routes = require('./routes')
app.use('/', routes)

//connect mongoose/MongoDB database
mongoose.connect(`mongodb://root:merntodo1@ds053176.mlab.com:53176/todomern`, { useNewUrlParser: true })

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log(`MongoDB database connected!`)
});

app.listen(port, () => console.log(`App listening on port ${port}`))