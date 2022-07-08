const express = require('express');
const app = express();
const server = require('http').Server(app);

app.use(express.static('./public'));

var port = 4444 || process.end.PORT;

server.listen(port, function() {
    console.log('server running on port ' + port);
});