const fs = require("fs");
const util = require("util");


class Reader{    
    constructor() {
        this.reader = util.promisify(fs.readFile);
    }
    async Read(filepatch) {
    try{
        return await this.reader(filepatch,"utf-8");
    } catch {
        return undefined;
    }
    };
};

module.exports = Reader;