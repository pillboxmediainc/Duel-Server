// const app = require('http').createServer(handler);
const app = require('http').createServer();
const io = require('socket.io');
const PORT = process.env.port || 3000;

// function handler(req, res) {
//   fs.readFile(__dirname + '/index.html', function(err, data) {
//     if (err) {
//       res.writeHead(500);
//       return res.end('Error loading index.html');
//     }

//     res.writeHead(200);
//     res.end(data);
//   });
// }

const duelServer = app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${dualServer.address().port}`);
});

const io = socketio(duelServer);

io.on('connection', function(socket) {
  console.log('A new client has connected!');
  console.log(socket.id);

  socket.on('disconnect', function() {
    console.log(`Client with id ${socket.id} is no longer connected.`);
  });
});

socket.on('createGame', function(start, end, strokeColor) {
  socket.broadcast.emit('drawData', start, end, strokeColor);
});

// app.use(express.static(path.join(__dirname, 'public')));
