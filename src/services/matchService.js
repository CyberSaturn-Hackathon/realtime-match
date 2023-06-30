export class MatchService {
  #repository;
  constructor(matchRepository) {
    this.#repository = matchRepository;
  }

  async create(data) {
    try {
      const { teamA, teamB, tournament, place, modality } = data;

      if (
        !teamA.trim() ||
        !teamB.trim() ||
        !tournament.trim() ||
        !place.trim() ||
        !modality.trim()
      ) {
        return {
          code: 400,
          message: 'Todos os campos são obrigatórios!',
          data: { error: true },
        };
      }

      const response = await this.#repository.create({
        ...data,
        pointsA: 0,
        pointsB: 0,
      });

      return {
        code: 201,
        message: 'Registro de partida criado com sucesso.',
        data: { ...response },
      };
    } catch (e) {
      return {
        code: 500,
        message: 'Erro interno!',
        data: { error: true, content: String(e) },
      };
    }
  }

  async findAll() {
    try {
      const response = await this.#repository.findAll();
      return {
        code: 200,
        message: 'Partidas encontradas com sucesso',
        data: { ...response },
      }
    } catch (e) {
      return {
        code: 500,
        message: 'Erro interno!',
        data: { error: true, content: String(e) }
      };
    }
  }

  async delete(id) {
    try {
      if (isNaN(id))
        return {
          error: true,
          content: 'Value is not a number',
          code: 400,
        };

      await this.#repository.delete(id);

      return {
        code: 204,
        message: 'Partida deletada.',
        data: {}
      }
    } catch (e) {
      return {
        code: 500,
        message: 'Erro interno!',
        data: { error: true, content: String(e) }
      };
    }
  }
}

