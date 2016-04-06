/**
 * Node server use Express
 * Manage URL, dev and public folder
 * 
 * @author: Christophe Malo
 * @version: 0.1.0
 */
var mdb = require('moviedb')('your_api_moviedb_key');
var express = require('express'); // Load Express framework
var http = require('http'); // Load module
var application = express(); // Create application
var server = http.createServer(application); // Create the server
var path = require('path');

application.use('/bower_components', express.static(path.join(__dirname, 'bower_components')))
.use('/movie', express.static(path.join(__dirname, 'movie')))
.use('/components', express.static(path.join(__dirname, 'components')));

application.get('/', function(request, response)
{
    response.sendFile(__dirname + '/index.html');
})

.get('/viewList', function(request, response){
    var page = (request.query["page"]) ? request.query["page"] : 1;
    page = (request.query["page"] > 1000) ? 1000 : request.query["page"];
    mdb.miscPopularMovies({page: page}, function(error, data)
    {
        data.total_pages = 1000;
        request.send(data);
    });
});


server.listen(8080);