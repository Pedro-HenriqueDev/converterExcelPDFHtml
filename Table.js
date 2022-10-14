class Table {
    constructor(arr) {
        this.header = arr[0];
        arr.shift();
        this.rows = arr;
    };

    get CountRows() {
        return this.rows.lenght;
    }
    get CountColumns() {
        return this.header.lenght;
    }
};

module.exports = Table;