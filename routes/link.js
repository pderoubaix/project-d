var express = require('express');
var router = new express.Router();

// we can use all of the HTTP verbs on the router
router.get('/bar', function(req, res, next) {  res.send('Hello World! ++jj\n'); });
router.post('/baz', function(req, res, next) {  res.send('Hello World!\n'); });

// at the end we export this router as a single unit
module.exports = router;