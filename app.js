const Processor = require("./Processor");
const Reader = require("./Reader");
const Writter = require("./Writter")
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const PDFWriter = require("./PDFWritter");

const reader = new Reader();
const writter = new Writter()
async function main() {
    let dados = await reader.Read("./conv.csv")
    console.log(dados)
    let dadosProcessados = Processor.Process(dados)

    let usuarios = new Table(dadosProcessados);

    let html = await HtmlParser.Parser(usuarios);
    
    writter.write(Date.now() + ".html", html)
    PDFWriter.Writter(Date.now() + ".PDF", html)
};

main()