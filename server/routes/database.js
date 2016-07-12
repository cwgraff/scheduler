var express = require('express');
var mysql = require('mysql');

require('../../env.js');

var router = express.Router();

//Connection details for MySQL database
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : process.env.DB_KEY,
    database : 'scheduler'
});


//Serve index.html back to browser
router.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/existingDates', function(request, response){

    var assignedDates = [];

    connection.connect();

    connection.query('SELECT date FROM Dates', function (error, results, fields) {
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        assignedDates = results;
        // fields will contain information about the returned results fields (if any)
        console.log(assignedDates);
        console.log(fields);
    });

    connection.end();

    response.send(assignedDates);
});
//
//router.get('/success', function(request, response){
//    response.send('success');
//});


module.exports = router;
