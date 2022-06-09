const chalk = require("chalk");
const fs = require("fs");
const path = require("path");

function extraiLinks(t) {
   const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
   const arrayResultados = [];
   let temp;
   while ((temp = regex.exec(t)) !== null) {
      arrayResultados.push({ [temp[1]]: temp[2] });
   }
   return arrayResultados.length === 0 ? "não há links" : arrayResultados;
}

function trataErro(erro) {
   throw new Error(chalk.red(erro.code, "não há arquivo no caminho"));
}

async function pegarArquivo(caminhoDoArquivo) {
   const caminhoAbsoluto = path.join(__dirname, caminhoDoArquivo);
   const encoding = "utf-8";
try{
   const arquivos = await fs.promises.readdir(caminhoAbsoluto, { encoding });

   const result = Promise.all(arquivos.map(async (arquivo) => {
      const localArquivo = `${caminhoAbsoluto}/${arquivo}`;
      const texto = await fs.promises.readFile(localArquivo, encoding);
      return extraiLinks(texto);
   }));
   return result
} catch(error){
   return trataErro(error);
}
}

// pegarArquivo("./file/texto1.md");

module.exports = pegarArquivo;
