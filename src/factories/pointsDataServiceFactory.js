import { PointsDataRepository } from '../repositories/pointsDataRepository.js';
import { PointsDataService } from '../services/pointsDataService';

const pointsDataServiceFactory = () => {
	const repository = new PointsDataRepository();
	const pointsDataService = new PointsDataService(repository);
	return pointsDataService;
};

export { pointsDataServiceFactory };
