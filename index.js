const chalk = require("chalk");
const fs = require("fs");

function extraiLinks(t) {
   const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
   const arrayResultados = [];
   let temp;
   while ((temp = regex.exec(t)) !== null) {
      arrayResultados.push({ [temp[1]]: temp[2] });
   }
   return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
}

function trataErro(erro) {
   throw new Error(chalk.red(erro.code, "não há arquivo no caminho"));
}

async function pegarArquivo(caminhoDoArquivo) {
   const encoding = "utf-8";
   try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
      return extraiLinks(texto);
   } catch (error) {
      trataErro(error);
   }
}

// pegarArquivo("./file/texto1.md");

module.exports = pegarArquivo;
