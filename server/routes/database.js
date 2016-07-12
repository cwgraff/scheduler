var express = require('express');
var mysql = require('mysql');

var router = express.Router();

var connection = mysql.createConnection({
    host     : 'localhost:3306',
    user     : 'root',
    password : 'secret',
    database : 'Dates'
});


//Serve index.html back to browser
router.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

//router.get('/fail', function(request, response){
//    response.send('fail');
//});
//
//router.get('/success', function(request, response){
//    response.send('success');
//});


module.exports = router;
