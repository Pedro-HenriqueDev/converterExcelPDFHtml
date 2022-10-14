class Processor {
    static Process(data) {
        let conteudo = data.split("\r\n");
        let rows = [];

        conteudo.forEach(row => {
            let arr = row.split(",");
            rows.push(arr)
        });
        return rows;
    };
};

module.exports = Processor;