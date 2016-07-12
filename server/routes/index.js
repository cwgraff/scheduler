var express = require('express');
var path = require('path');

var router = express.Router();

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

