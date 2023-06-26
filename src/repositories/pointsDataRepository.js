import fs from 'fs';

export class PointsDataRepository{
    #fs;
    constructor(){
        this.#fs = fs;
    }
}