module.exports = io => {
  io.on('connection', socket => {
    console.log(socket.id, ' has made a persistent connection to the server!');
    // socket.emit('join-game', 'can you hear me?');

    socket.on('iwin', () => {
      socket.broadcast.emit('youlose');
      // io.broadcast.emit('youlose');
    });

    // socket.on('new-channel', channel => {
    //   socket.broadcast.emit('new-channel', channel);
    // });

    //   socket.emit('request', /* */); // emit an event to the socket
    // io.emit('broadcast', /* */); // emit an event to all connected sockets
    // socket.on('reply', function(){ /* */ }); // listen to the event

    socket.on('disconnect', () => {
      console.log(socket.id, 'has disconnected from the server');
    });
  });
};
