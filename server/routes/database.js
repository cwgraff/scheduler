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
        for (var i = 0; i < results.length; i++) {
            console.log('Result in Loop: ', results[i].date);
            assignedDates.push(results[i].date);
        }
        // fields will contain information about the returned results fields (if any)
        console.log("In Loop: ", assignedDates);
        response.send(assignedDates);
    });

    connection.end();



});

router.post('/submitNewDate', function(request, response){
    console.log(request.body);
    var addNewDate = request.body.date;
    console.log('Date Route Hit: ', addNewDate);
    connection.connect();


        var queryString = "INSERT INTO Dates (date) VALUES (?);";

        connection.query(queryString, addNewDate, function (error, results, fields) {
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        //response.sendStatus(200);
    });

    //connection.end();

    //query.on('error', function (error){
    //        done();
    //        console.log(error);
    //        return response.status(500).json({ success: false, data: error});
    //    });
    //
    //    query.on('end', function () {
    //        client.end();
    //        return response.sendStatus(200);
    //    });
    //});
});
//
//router.get('/success', function(request, response){
//    response.send('success');
//});


module.exports = router;
