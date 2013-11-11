var mongoose = require('mongoose'),
    User = require('../lib/user'),
    moment = require('moment');

var connStr = 'mongodb://localhost/mongoose-bcrypt-test';
mongoose.createConnection(connStr, function(err) {
    if (err) {
        throw err;
    }
    console.log('Successfully connected to MongoDB');
});


// create a user a new user




user = {

    add : function add (req, res){

        var user = new User({
            username: req.body.username,
            password: req.body.password,
            createdAt: moment()
        });

        user.save(function(err) {
            if (!err) {
                res.jsonp('{saved}');
            } else {
                throw err;
            }
            console.log('saved');
        })
    },

    browse : function browse (req,res) {




    }

}



module.exports.user = user;