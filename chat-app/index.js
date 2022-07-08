const servapp = require('./server');

var io = require('socket.io')(servapp.serv);

io.sockets.on('connection', function(socket) {
    console.log('user connected...');
    socket.on('login', function(data) {
        if (data.username === 'zero' && data.password === 'zero')
            socket.emit('login', { status: 1 });
        else
            socket.emit('login', { status: 0 });
    });

    socket.on('disconnect', function() {
        console.log('user disconnected...');
    });

    socket.on('create', function(data) {
        if (socket.adapter.rooms[data.room])
            socket.emit('status', { status: 0 });
        else {
            socket.join(data.room);
            socket.emit('status', { status: 1 });
            console.log('Someone joined...');
        }
    });

    socket.on('join', function(data) {
        if (socket.adapter.rooms[data.room].length > 1)
            socket.emit('status', { status: 0 });
        else {
            socket.join(data.room);
            socket.emit('status', { status: 0 });
            console.log('Someone joined...');
        }
    });

});