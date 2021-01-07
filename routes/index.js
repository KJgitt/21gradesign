var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var test=require("../controllers/test.js")
router.get('/test',test.get_test)
module.exports = router;
