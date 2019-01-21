module.exports = io => {
  io.on('connection', socket => {
    console.log(socket.id, ' We read you loud and clear, Client. Over');
    socket.emit('join-game');

    socket.on('iwin', () => {
      socket.broadcast.emit('youlose');
    });

    socket.on('disconnect', () => {
      console.log(socket.id, 'has disconnected from the server');
    });
  });
};
