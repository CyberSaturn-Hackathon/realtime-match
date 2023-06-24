export class MatchRepository {
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

      return await this.#db('matches').insert(
        {
          teamA,
          teamB,
          pointsA,
          pointsB,
          tournament,
          place,
          modality,
        },
        '*'
      );
    } catch (e) {
      throw e;
    }
  }

  async findById(id) {
    try {
      return await this.#db('matches').where({ id }).first();
    } catch (e) {
      throw e;
    }
  }
}

