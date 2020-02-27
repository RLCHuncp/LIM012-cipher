const cipher = {
  // COFICADO
  encode : (offset, string) =>{
    let resultadoC = "";
    for (let i = 0; i < string.length; i++) {
      let letterC=string[i];

      if (letterC.match(/[a-z]/i)) {
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
            let textAsc = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
            resultadoC += String.fromCharCode(textAsc);
        } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
            let textAsc = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
            resultadoC += String.fromCharCode(textAsc);
        }
    } else {
        resultadoC += letterC;
    }
  }
    return resultadoC;
  },
  //DECODIFICADO
  decode : (offset, string)=>{
    let resultadoD = "";
    for (let i = 0; i < string.length; i++) {
      let letterD = string[i];
      //identificacion de espacios vacios
      if (letterD.match(/[a-z]/i)) {

          if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
              let text = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
              resultadoD += String.fromCharCode(text);
          } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
              let text = ((string.charCodeAt(i) - 97 - parseInt(offset) + 52) % 26) + 97;
              resultadoD += String.fromCharCode(text);
          }
      } else {
        resultadoD += letterD;
      }
  }
  //retornar respuesta
  return resultadoD;
  }
};

export default cipher;
