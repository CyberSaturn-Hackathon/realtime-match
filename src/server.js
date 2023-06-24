const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 3000;
let SESSION_POINTS_DATA = null;

const matchService = require('./factories/matchServiceFactory')();

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

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/create/match', (req, res) => {
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

	res.status(code).json({ message, data });
});

app.get('/adm', (req, res) => {
	res.render('admin');
});

app.get('/session/points', (req, res) => {
	return res.json(SESSION_POINTS_DATA);
});

http.listen(port, () => {
	console.log('Server is running in http://localhost:' + port);
});
