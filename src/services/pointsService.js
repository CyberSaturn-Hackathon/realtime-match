export class PointsService {
	#repository;
	constructor(pointsDataRepository) {
		this.#repository = pointsDataRepository;
	}

	async findAll() {
		try {
			const response = await this.#repository.findAll();
			return {
				data: { ...response },
				message: 'Pontos encontrados',
				code: 200,
			};
		} catch (e) {
			return { error: true, content: e, code: 500 };
		}
	}

	async findOne(id) {
		try {
			if (isNaN(id))
				return {
					error: true,
					content: 'Value is not a number',
					code: 400,
				};

			const response = await this.#repository.findOne(id);

			if (!response)
				return { error: true, content: 'Not found.', code: 404 };

			return {
				data: { ...response },
				message: 'Ponto encontrado',
				code: 200,
			};
		} catch (e) {
			return { error: true, content: e, code: 500 };
		}
	}

	async create(id, pointsA, pointsB) {
		try {
			if (isNaN(id))
				return {
					error: true,
					content: 'Id is not a number',
					code: 400,
				};

			const response = await this.#repository.create(id, {
				pointsA,
				pointsB,
			});

			return {
				data: response,
				message: 'Pontos criados',
				code: 201,
			};
		} catch (e) {
			return { error: true, content: e, code: 500 };
		}
	}
}
