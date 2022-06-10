function geraArrayDeURLs(arrayLinks) {
   //Object.values => retorna sempre um array
   return arrayLinks.map((objetoLink) => Object.values(objetoLink).join());
}
function validaURLs(arrayLinks) {
   return geraArrayDeURLs(arrayLinks);
}

module.exports = validaURLs;
