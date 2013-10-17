var express = require('express'),
    mongoose = require('mongoose'),
    _  = require('underscore'),
    when         = require('when'),
    requestHandler,
    links;


mongoose.connect('mongodb://localhost/contact');
var Schema = mongoose.Schema;
var LinkSchema= new Schema({
    name: { type: String, required: true },
    phone: { type: Number }
});

var LinkModel = mongoose.model('Links', LinkSchema);

links = {

    browse : function browse(option) {
        var query =  LinkModel.find(function (err, links) {
            if (!err) {
                return(links);
            } else {
                console.log(err);
            }
        });
        return promise = query.exec();
    }




}


requestHandler = function (apiMethod) {
    console.log(apiMethod);
    return function (req, res) {
        var options = _.extend(req.body, req.query, req.params),
            apiContext = {
                user: req.session && req.session.user
            };

        return apiMethod.call(apiContext, options).then(function (result) {
            res.json(result || {});
        }, function (error) {
            error = {error: _.isString(error) ? error : (_.isObject(error) ? error.message : 'Unknown API Error')};
            res.json(400, error);
        });
    };
};

module.exports.links = links;
module.exports.requestHandler = requestHandler;