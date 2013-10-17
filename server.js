/**
 * Module dependencies.
 */

var express = require('express'),
     http = require('http'),
     api = require('./server/controler/api'),
    path = require('path');



var server = express();

// all environments
server.set('port', process.env.PORT || 3000);

server.use(express.favicon());
server.use(express.logger('dev'));
server.use(express.bodyParser());
server.use(express.methodOverride());
server.use(server.router);



// development only
if ('production' == server.get('env')) {
    server.use(express.static(path.join(__dirname, 'dist')));
} else {
    server.use(express.static(path.join(__dirname, 'app')));
    server.use(express.errorHandler());
}

//node route
server.get('/api/link',api.requestHandler(api.links.browse));
//server.get('/api/v0.1/posts', authAPI, disableCachedResult, );
//server.post('/api/v0.1/posts', authAPI, disableCachedResult, api.requestHandler(api.posts.add));
//server.get('/api/v0.1/posts/:id', authAPI, disableCachedResult, api.requestHandler(api.posts.read));
//server.put('/api/v0.1/posts/:id', authAPI, disableCachedResult, api.requestHandler(api.posts.edit));
//server.del('/api/v0.1/posts/:id', authAPI, disableCachedResult, api.requestHandler(api.posts.destroy));


http.createServer(server).listen(server.get('port'), function () {
    console.log("Express server listening on port %d in %s mode", server.get('port'), server.get('env'));
});