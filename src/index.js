import cipher from './cipher.js';
//Variables botones
const btnCifrar = document.getElementById("btnCifrar");
const btnDecifrar = document.getElementById("btnDecifrar");

//Evento click CIFRAR

btnCifrar.addEventListener('click', () => {
let mensajeCifrar= document.getElementById('message1').value.toUpperCase();
let posicion = document.getElementById('offset').value;
let  cifrado  =  cipher.encode( mensajeCifrar, posicion ) ;
document.getElementById('message2').value=cifrado;
});

btnDescifrar.addEventListener('click',()=>{
let mensajeDes=document.getElementById('message1').value.toUpperCase();
let posicion=document.getElementById('offset').value;
let descifrado=cipher.decode(mensajeDes, posicion);
document.getElementById('message2').value=descifrado;
});
console.log(cipher);

