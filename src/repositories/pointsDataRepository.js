import fs from 'fs';
import path from 'path';

export class PointsDataRepository{
    #fs;
    #filePath = path.join(__dirname, '../../database/points/pointsData.json');

    constructor(){
        this.#fs = fs;
    }

    async findAll(){
        data = await this.#fs.readFile(this.#filePath, { encoding: 'utf-8' });
        return data;
    }
}