const chalk = require("chalk");
const pegarArquivo = require("./index");

const caminho = process.argv;
console.log(caminho)

async function processaTexto(caminhoDeArquivo){
   const resultado = await pegarArquivo(caminhoDeArquivo[2])
   console.log(chalk.yellow('lista de links'), resultado);
}

processaTexto(caminho);