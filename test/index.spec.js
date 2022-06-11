const pegarArquivo = require("../index");

const arrayResult = [
   { FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList" },
];

describe("pegaArquivo::", () => {
   it("deve ser uma função", () => {
      //pode ser um it() ou test()
      expect(typeof pegarArquivo).toBe("function");
   });
   it("deve retornar array com resultados", async () => {
      const resultado = await pegarArquivo("./test/arquivos/texto1.md");
      expect(resultado).toEqual(arrayResult);
   });
   it("deve retornar mensagem 'não há links'", async () => {
      const resultado = await pegarArquivo("./test/arquivos/texto_semlink.md");
      expect(resultado).toBe("não há links");
   });
});
