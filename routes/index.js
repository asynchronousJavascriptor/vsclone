var express = require('express');
var router = express.Router();
const fs = require("fs");

router.get('/', function(req, res) {
  fs.readdir(`./uploads`, {withFileTypes: true}, function(err, files){
    res.render("index", {files})
  })
});

router.get('/createfile', function(req, res) {
  fs.writeFile(`./uploads/${req.query.filename}`, "", function(err){
    if(err) res.send(err);
    else res.redirect("back")
  })
});

router.get('/createfolder', function(req, res) {
  fs.mkdir(`./uploads/${req.query.foldername}`, function(err){
    if(err) return err;
    else res.redirect("back");    
  })
});

module.exports = router;