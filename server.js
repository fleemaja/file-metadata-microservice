var express = require('express');

var app = express();

var path = process.cwd();
var port = process.env.PORT || 8080;

var multer  = require('multer');
var upload = multer();

app.set('view engine', 'jade');
  
app.get("/", function(request, response) {
    response.render('index');
});

app.post('/', upload.single('userFile'), function(req, res, next) {
    var fileDetails = {
        name: req.file.originalname,
        size: req.file.size
    };
    res.send(fileDetails);
});

app.listen(port);