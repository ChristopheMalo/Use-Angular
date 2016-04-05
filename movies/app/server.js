/**
 * Node server use Express
 * Manage URL, dev and public folder
 * 
 * @author: Christophe Malo
 * @version: 0.1.0
 */
var express = require('express'); // Load Express framework
var http = require('http'); // Load module
var application = express(); // Create application
var server = http.createServer(application); // Create the server

var path = require('path');
application.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

application.get('/', function(request, response)
{
    response.sendFile(__dirname + '/index.html');
});


server.listen(8080);