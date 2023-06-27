import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export class PointsDataRepository {
	#fs;
	#filePath = path.join(__dirname, '../../database/points/pointsData.json');

	constructor() {
		this.#fs = fs.promises;
	}

	async findAll() {
		try {
			const data = await this.#fs.readFile(this.#filePath, {
				encoding: 'utf-8',
			});

			return data;
		} catch (e) {
			throw e;
		}
	}
}
