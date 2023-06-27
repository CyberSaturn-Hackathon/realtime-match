export class pointsDataService {
	#repository;
	constructor(pointsDataRepository) {
		this.#repository = pointsDataRepository;
	}
}
