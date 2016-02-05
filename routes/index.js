var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { tittle: 'Proyecto Final', place:'BOIMCO' });
});

module.exports = router;
