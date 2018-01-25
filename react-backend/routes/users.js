var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    username: "AlfredoM"
   }, {
     id: 2,
     username: "porquenotrabaja"
   },
  {
    id:3,
    username: "Ididitwoohoo"
  }]);
});

module.exports = router;



