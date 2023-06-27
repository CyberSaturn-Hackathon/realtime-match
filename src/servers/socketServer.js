import { createMatchService } from '../factories/matchServiceFactory.js';
import { createPointsService } from '../factories/pointsServiceFactory.js';

const matchService = createMatchService();
const pointsService = createPointsService();

let SESSION_POINTS_DATA = null;

const configureSocketServer = (io) => {
	io.on('connection', (socket) => {
		socket.on('sendPoints', async (res) => {
			const { pointsA, pointsB } = res;
			await pointsService.create(0, pointsA, pointsB);
			SESSION_POINTS_DATA = { pointsA, pointsB };
			io.emit('showPoints', res);
		});
	});
};

export { configureSocketServer };
