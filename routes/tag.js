var express = require('express');

var router = new express.Router();
//route
// we can use all of the HTTP verbs on the router
//router.get('/bar', function(req, res, next) {  res.send('Hello World! ++jj\n'); });

router.get('/',function (req, res){
    res.send("hooooo");
});


module.exports = router;