/**
 * Module dependencies.
 */

var express = require('express'),
     http = require('http'),
     api = require('./server/controler/api'),
    security = require('./server/lib/security'),
    user = require('./server/controler/user'),
    path = require('path'),
    nconf = require('nconf'),
    fs = require('fs'),
    winston = require('winston')



var server = express();

/**
 * loading configuration file by environment based on ENV variable NODE_ENV (dev,prod,....)
 */
nconf.argv()
    .env()
    .file({ file: './server/'+ process.env.NODE_ENV + '_config.json'});

var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: './logs/app.log' })
    ]
});

// auth


//middleware
function authAPI(req, res, next) {
    if (!req.session.user) {
        // TODO: standardize error format/codes/messages
        res.json(401, { error: 'Please sign in' });
        return;
    }

    next();
}

// all environments
server.set('port', process.env.PORT || 3000);

server.use(express.favicon());
server.use(express.logger('dev'));
server.use(express.bodyParser());
server.use(express.methodOverride());
server.use(express.cookieParser());
server.use(express.cookieSession({ secret: 'tobo!', cookie: { maxAge: 60 * 60 * 1000 }}));
server.use(server.router);



// development only
if ('production' == server.get('env')) {
    server.use(express.static(path.join(__dirname, 'dist')));
} else {
    server.use(express.static(path.join(__dirname, 'app')));
    server.use(express.errorHandler());
}

//node route
server.get('/api/link',authAPI,api.requestHandler(api.links.browse));
//server.get('/api/v0.1/posts', authAPI, disableCachedResult, );
//server.post('/api/v0.1/posts', authAPI, disableCachedResult, api.requestHandler(api.posts.add));
//server.get('/api/v0.1/posts/:id', authAPI, disableCachedResult, api.requestHandler(api.posts.read));
//server.put('/api/v0.1/posts/:id', authAPI, disableCachedResult, api.requestHandler(api.posts.edit));
//server.del('/api/v0.1/posts/:id', authAPI, disableCachedResult, api.requestHandler(api.posts.destroy));

//security route
//server.get('/islogged',security.auth.islogged);

//user
server.post('/user/add',user.user.add);

http.createServer(server).listen(server.get('port'), function () {
    console.log("Express server listening on port %d in %s mode", server.get('port'), server.get('env'));
});