var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require("path");

app.use(express.static(path.join(__dirname, 'src/static')));
//app.use(express.static(__dirname));
app.get('/', function(req, res, next)
{
   res.sendFile(__dirname + 'src/static/index.html');
});

server.listen(4200);
