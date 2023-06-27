import { client } from '../../database/client.js';
import { MatchRepository } from '../repositories/MatchRepository.js';
import { MatchService } from '../services/matchService.js';

const createMatchService = () => {
	const matchRepository = new MatchRepository(client);
	const matchService = new MatchService(matchRepository);
	return matchService;
};

export { createMatchService };
