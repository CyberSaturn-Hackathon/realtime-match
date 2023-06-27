export class PointsDataService {
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
			};
		} catch (e) {
			return { error: true, content: e };
		}
	}

	async findOne(id) {
		try {
			if (isNaN(id)) return { error: true, content: 'Value is NaN' };

			const response = await this.#repository.findOne(id);

			if (!response) return { error: true, content: 'Not found.' };

			return {
				data: { ...response },
				message: 'Ponto encontrado',
			};
		} catch (e) {
			return { error: true, content: e };
		}
	}
}
