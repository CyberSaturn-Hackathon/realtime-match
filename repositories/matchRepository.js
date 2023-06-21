class MatchRepository {
	#db;
	constructor(databaseClient) {
		this.#db = databaseClient;
	}

	async create(data) {
		try {
			const {
				teamA,
				teamB,
				pointsA,
				pointsB,
				tournament,
				place,
				modality,
			} = data;

			return await this.#db('matchs').insert({
				teamA,
				teamB,
				pointsA,
				pointsB,
				tournament,
				place,
				modality,
			});
		} catch (e) {
			throw e;
		}
	}
}
