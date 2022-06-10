const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

function manejaErros(erro){
   throw new Error(erro)
}

async function checaStatus(arraysURLs) {
   try {
      const arrayDeStatus = await Promise.all(
         arraysURLs.map(async (url) => {
            const res = await fetch(url);
            return `${res.status} - ${res.statusText}`;
         })
      );
      return arrayDeStatus;
      
   } catch (error) {
      return manejaErros(error);
   }
}

function geraArrayDeURLs(arrayLinks) {
   //Object.values => retorna sempre um array
   return arrayLinks.map((objetoLink) => Object.values(objetoLink).join());
}
async function validaURLs(arrayLinks) {
   try {
      const links = geraArrayDeURLs(arrayLinks);
      const statusLinks = await checaStatus(links);
      // const resultados = arrayLinks.map((objeto, indice) => ({
      //    ...objeto,
      //    status: statusLinks[indice] //adiona um novo atributo
      // }))
      const resultados = arrayLinks.map((objeto, indice) => {
         const newObjeto = Object.assign(objeto, { status: statusLinks[indice] });
         return newObjeto;
      });
      return resultados;
      
   } catch (error) {
      return manejaErros(error);
   }
}

module.exports = validaURLs;
