import { PointsRepository } from '../repositories/pointsRepository.js';
import { PointsService } from '../services/pointsDataService.js';

const createPointsService = () => {
	const repository = new PointsRepository();
	const pointsService = new PointsService(repository);
	return pointsService;
};

export { createPointsService };
