import cipher from './cipher.js';
//Variables botones
const btnCifrar = document.getElementById("btnCifrar");
const btnDescifrar = document.getElementById("btnDecifrar");

//Evento click CIFRAR
btnCifrar.addEventListener('click', () => {
let posicion = document.getElementById('offset').value;
let mensajeCifrar= document.getElementById('message1').value.toUpperCase();
let  cifrado  =  cipher.encode(posicion,mensajeCifrar) ;//for
document.getElementById('message2').value=cifrado;
});

btnDescifrar.addEventListener('click',()=>{
let posicion=document.getElementById('offset').value;
let mensajeDes=document.getElementById('message1').value.toUpperCase();
let descifrado=cipher.decode(posicion,mensajeDes);
document.getElementById('message2').value=descifrado;
});

