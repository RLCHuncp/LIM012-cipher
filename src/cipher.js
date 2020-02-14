const cipher = {
  // ...
  encode (cifrado, post) {
    let resultado = "";
    for (let i = 0; i < cifrado.length; i++) {

      //Fórmula para posicionar la letra dentro del código ASCII
      let codAscMen = (cifrado.charCodeAt(i) - 65 + parseInt(post)) % 26 + 65;
      //La posicion 0 es la letra A, es decir 65 representa el código ASCII de A
      //72
      
      //Concatenando letras codificadas
      resultado = resultado + String.fromCharCode(codAscMen);
    }

    return resultado;

  }
};

export default cipher;
