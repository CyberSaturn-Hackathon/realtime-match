import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { createMatchService } from './factories/matchServiceFactory.js';

const app = express();
const http = createServer(app);
const io = new Server(http);
const port = 3000;
let SESSION_POINTS_DATA = null;

const matchService = createMatchService();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

io.on('connection', (socket) => {
  socket.on('sendPoints', (res) => {
    const { pointsA, pointsB } = res;
    SESSION_POINTS_DATA = { pointsA, pointsB };
    io.emit('showPoints', res);
  });
});

app.get('/', (_, res) => {
  return res.render('index');
});

app.get('/create/match', (_, res) => {
  return res.render('admin/createMatch');
});

app.post('/save/match', async (req, res) => {
  const { teamA, teamB, tournament, place, modality } = req.body;
  const result = await matchService.create({
    teamA,
    teamB,
    tournament,
    place,
    modality,
  });

  const { data, message, code } = result;

  return res.status(code).json({ message, data });
});

app.get('/adm', (_, res) => {
  return res.render('admin');
});

app.get('/session/points', (_, res) => {
  return res.json(SESSION_POINTS_DATA);
});

http.listen(port, () => {
  console.log('Server is running in http://localhost:' + port);
});