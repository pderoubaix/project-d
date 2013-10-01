var express = require('express');
var mongoose = require('mongoose');

//mongodb connect & schema
mongoose.connect('mongodb://localhost/contact');
var Schema = mongoose.Schema;


var router = new express.Router();


var LinkSchema= new Schema({
    name: { type: String, required: true },
    phone: { type: Number }
});

var LinkModel = mongoose.model('Links', LinkSchema);

//route
// we can use all of the HTTP verbs on the router
//router.get('/bar', function(req, res, next) {  res.send('Hello World! ++jj\n'); });

router.get('/',function (req, res){
    return LinkModel.find(function (err, links) {
        if (!err) {
            res.jsonp(links);
        } else {
            console.log(err);
        }
    });
});

router.get('/:id', function (req, res) {
    return LinkModel.findById(req.params.id, function (err, link) {
        if (!err) {
            res.jsonp(link);
        } else {
            console.log(err);
        }
    });
});



router.post("/",function (req, res) {
    var link;
    link = new LinkModel({
        name: req.body.name,
        phone: req.body.phone
    });
    link.save(function (err) {
        if (!err) {
            console.log("created");
        } else {
            console.log(err);
        }
    });

    return res.send(link);
});


router.put('/',function (req, res) {
    return ContactModel.findById(req.params.id, function (err, contact) {
        contact.name = req.body.name;
        contact.phone = req.body.phone;
        contact.save(function (err) {
            if (!err) {
                console.log("updated");
            } else {
                console.log(err);
            }
            res.send(contact);
        });
    });
});

router.delete('/',function (req, res){
    return ContactModel.findById(req.params.id, function (err, contact) {
        return contact.remove(function (err) {
            if (!err) {
                console.log("removed");
                return res.send('');
            } else {
                console.log(err);
            }
        });
    });
});



// at the end we export this router as a single unit
module.exports = router;