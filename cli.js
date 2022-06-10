const chalk = require("chalk");
const pegarArquivo = require("./index");
const validaURLs = require("./http-validation");

const caminho = process.argv;
// console.log(caminho)

async function processaTexto(caminhoDeArquivo) {
   const resultado = await pegarArquivo(caminhoDeArquivo[2]);
   if (caminhoDeArquivo[3] === "validar") {
      console.log(chalk.yellow("links validados"), validaURLs(resultado));
   } else {
      console.log(chalk.yellow("lista de links"), resultado);
   }
}

processaTexto(caminho);
