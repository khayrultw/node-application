var express = require('express');
var app = express();
var serv = require('http').Server(app);

serv.listen(4444);

app.use(express.static('public'));

module.exports = { serv, app };