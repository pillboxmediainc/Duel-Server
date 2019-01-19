const path = require('path');
const express = require('express');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;
const app = express();
const server = app.listen(PORT, () => console.log(`Connected to port ${PORT}`));
const io = require('socket.io')(server);

// handle sockets
require('./socket')(io);

module.exports = app;

// logging middleware
app.use(morgan('dev'));
