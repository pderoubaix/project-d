var mongoose = require('mongoose'),
    User = require('../lib/user');


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
        console.log(req.body.username);
        var InsertUser = new User({
            username: req.body.username,
            password: req.body.password
        });

        InsertUser.save(function(err) {
            if (!err) {
                res.jsonp('{saved}');
            } else {
                throw err;
            }
            console.log('saved');
        })
    }


}



module.exports.user = user;