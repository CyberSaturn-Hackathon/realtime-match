const databaseClient = require('../database/client');
const MatchRepository = require('../repositories/matchRepository');
const MatchService = require('../services/matchService');

const createMatchService = () => {
	const matchRepository = new MatchRepository(databaseClient);
	const matchService = new MatchService(matchRepository);
	return matchService;
};

module.exports = matchService;
