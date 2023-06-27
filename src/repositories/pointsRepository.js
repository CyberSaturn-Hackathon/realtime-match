import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export class PointsRepository {
	#fs;
	#filePath = path.join(__dirname, '../../database/points/pointsData.json');

	constructor() {
		this.#fs = fs.promises;
	}

	async #readFile() {
		return JSON.parse(
			await this.#fs.readFile(this.#filePath, {
				encoding: 'utf-8',
			})
		);
	}

	async #writeFile(content) {
		return await this.#fs.writeFile(this.#filePath, content, {
			encoding: 'utf-8',
		});
	}

	async findAll() {
		try {
			const data = this.#readFile();
			return data;
		} catch (e) {
			throw e;
		}
	}

	async findOne(id) {
		try {
			const data = await this.findAll();
			return data[id];
		} catch (e) {
			throw e;
		}
	}

	async create(key, value) {
		try {
			const data = await this.#readFile();
			data[key] = value;
			await this.#writeFile(data);
			return true;
		} catch (e) {
			throw e;
		}
	}
}
