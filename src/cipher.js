const cipher = {
  // ...
  encode : (position, cifrado) =>{
    let resultadoC = "";
    for (let i = 0; i < cifrado.length; i++) {
      let codAscMen = (cifrado.charCodeAt(i) - 65 + parseInt(position)) % 26 + 65;
      resultadoC =resultadoC + String.fromCharCode(codAscMen);
    }
    return resultadoC;
  },

  decode : (position, mensaje)=>{
    let resultadoD ="";
    for (let i=0; i < mensaje.length; i++){
      let desencriptar=(mensaje.charCodeAt(i) + 65 - parseInt(position))% 26 + 65;
      resultadoD= resultadoD+String.fromCharCode(desencriptar);
    }
    return resultadoD;
  }
};

export default cipher;
