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
var testUser = new User({
    username: 'jmar7757',
    password: 'Password'
});

user = {

    add : function add(option) {
        testUser.save(function(err) {
            if (err) {
                throw err;
            }
            console.log('saved');
        })
    }


}



module.exports.user = user;