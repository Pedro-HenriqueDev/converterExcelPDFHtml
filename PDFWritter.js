const pdf = require("html-pdf");

class PDFWritter {
    static Writter(filename, html) {
        pdf.create(html,{}).toFile(filename,(err) => {});
    }
}

module.exports = PDFWritter;