import cipher from './cipher.js';
//Variables botones
const btnCifrar = document.getElementById("btnCifrar");
const btnDecifrar = document.getElementById("btnDecifrar");

//Evento click CIFRAR

btnCifrar.addEventListener('click', () => {
  let mensajeCifrar= document.getElementById("message1").value.toUpperCase();

  let posicion = document.getElementById("offset").value;

  let cifrado = cipher.encode(mensajeCifrar);
  let post = cipher.encode(posicion);

  

});
console.log(cipher);
