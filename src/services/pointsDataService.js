export class pointsDataService {
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
			const response = await this.#repository.findOne(id);
			return {
				data: { ...response },
				message: 'Ponto encontrado',
			};
		} catch (e) {
			return { error: true, content: e };
		}
	}
}
