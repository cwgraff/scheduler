var express = require('express');
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var database = require('./routes/database');

var app = express();

app.use(express.static('server/public'));

app.use('/data', database);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', index);


//###### Server #######
var server = app.listen(process.env.PORT || 3000, function(){
   var port = server.address().port;
    console.log('Waiting for some requests on port', port);
});
