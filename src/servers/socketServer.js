import { createMatchService } from './factories/matchServiceFactory.js';

const matchService = createMatchService();
let SESSION_POINTS_DATA = null;

const configureSocketServer = (io)=>{
  io.on('connection', (socket) => {
    socket.on('sendPoints', (res) => {
      const { pointsA, pointsB } = res;
      SESSION_POINTS_DATA = { pointsA, pointsB };
      io.emit('showPoints', res);
    });
  });
}

export { configureSocketServer };