var express = require('express');
var router = express.Router();
const fs = require("fs");

router.get('/', function(req, res) {
  res.render("index");
});

router.get('/createfile', function(req, res) {
  fs.writeFile(`./uploads/${req.query.filename}`, "", function(err){
    if(err) res.send(err);
    else res.redirect("back")
  })
});

module.exports = router;