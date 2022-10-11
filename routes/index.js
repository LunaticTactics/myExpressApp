var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 04', header: 'Ma super application Express', text: 'Les membres de l\'équipe sont: Nicolas Payre et mon chien Patou' });
});

module.exports = router;
