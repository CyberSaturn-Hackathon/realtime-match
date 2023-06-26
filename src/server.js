import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { configureHTTPServer } from './servers/httpServer.js';
import { configureSocketServer } from './servers/socketServer.js';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

configureHTTPServer(app);
configureSocketServer(io);

const port = 3000;
httpServer.listen(port, () => {
  console.log('Server is running at http://localhost:' + port);
});
