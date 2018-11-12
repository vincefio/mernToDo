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
var mongoKey = require('./db/connection')
mongoose.connect(mongoKey.mongoURI, { useNewUrlParser: true })

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log(`MongoDB database connected!`)
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, () => console.log(`App listening on port ${port}`))