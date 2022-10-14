const fs = require("fs")
const util = require("util")

class Writter {
    constructor() {
        this.writter = util.promisify(fs.writeFile)
    };

    async write(filename, data) {
        try {
            await this.writter(filename, data)
            return true
        }
        catch(err) {
            return false
        }
    };
};

module.exports = Writter ;