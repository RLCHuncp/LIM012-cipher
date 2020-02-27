import cipher from './cipher.js';
//Variables botones
const btnCifrar = document.getElementById("btnCifrar");
const btnDecifrar = document.getElementById("btnDecifrar");

//Evento click CIFRAR
btnCifrar.addEventListener('click', () => {
let posicion = document.getElementById('offset').value;
let mensajeCifrar= document.getElementById('msg-input').value;
document.getElementById('msg-output').innerHTML=cipher.encode(posicion,mensajeCifrar);
});

btnDecifrar.addEventListener('click',()=>{
let posicion=document.getElementById('offset').value;
let mensajeDes=document.getElementById('msg-input').value;
document.getElementById('msg-output').innerHTML=cipher.decode(posicion,mensajeDes);
});

