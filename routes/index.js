var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET heath-check. */
router.get('/health', function(req, res, next) {
  res.status(200).json({
    date: new Date(),
    status : 'OK'
  });
});
module.exports = router;
