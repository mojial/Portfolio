let boton1 = document.getElementsByTagName('a')[5];
let boton2 = document.getElementsByTagName('a')[6];
let boton3 = document.getElementsByTagName('a')[7];

let parrafo1 = document.getElementsByClassName('contenidoExpand')[0];
let parrafo2 = document.getElementsByClassName('contenidoExpand')[1];
let parrafo3 = document.getElementsByClassName('contenidoExpand')[2];

console.log(boton1);
console.log(parrafo3);

boton1.addEventListener('click', () => {
    parrafo1.style.display = "block";
    });

boton2.addEventListener('click', () => {
        parrafo2.style.display = "block";
    });

    boton3.addEventListener('click', () => {
        parrafo3.style.display = "block";
    });
