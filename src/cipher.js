const cipher = {
  // ...
  encode : (cifrado, position) =>{
    let resultadoC = "";
    for (let i = 0; i < cifrado.length; i++) {

      //Fórmula para posicionar la letra dentro del código ASCII
      let codAscMen = (cifrado.charCodeAt(i) - 65 + parseInt(position)) % 26 + 65;
      //La posicion 0 es la letra A, es decir 65 representa el código ASCII de A
      //72
      
      //Concatenando letras codificadas
      resultadoC =resultadoC + String.fromCharCode(codAscMen);
      console.log(resultadoC);
    }

    return resultadoC;

  },

  decode : (mensaje, position)=>{
    let resultadoD ="";
    for (let i=0; i < mensaje.length; i++){
      let desencriptar=(mensaje.charCodeAt(i) + 65 - parseInt(position))% 26 + 65;
      resultadoD= resultadoD+String.fromCharCode(desencriptar);
      console.log(resultadoD);
    }
    return resultadoD;
  }
};

export default cipher;
