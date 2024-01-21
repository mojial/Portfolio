const imagenIdioma = document.querySelector('.bandera-mini');
const textoLenguaje = document.querySelector('.toggleLenguage');

let idiomaActual = "ESP";

console.log(textoLenguaje);

textoLenguaje.addEventListener('click', () => {
    if (idiomaActual === "ESP") {
        // Cambiar a inglés
        textoLenguaje.innerHTML = "ENG";
        imagenIdioma.src = "imagenes/engbandera.png";
        idiomaActual = "ENG";
        /* window.location.href = "index-eng/indexeng.html"; */
    } else {
        // Cambiar a español
        textoLenguaje.innerHTML = "ESP";
        imagenIdioma.src = "imagenes/spain.png"; 
        idiomaActual = "ESP";
    }
});

imagenIdioma.addEventListener('click', () => {
    if (idiomaActual === "ESP") {
        // Cambiar a inglés
        textoLenguaje.innerHTML = "ENG";
        imagenIdioma.src = "imagenes/engbandera.png";
        idiomaActual = "ENG";
        /* window.location.href = "index-eng/indexeng.html"; */
    } else {
        // Cambiar a español
        textoLenguaje.innerHTML = "ESP";
        imagenIdioma.src = "imagenes/spain.png";
        idiomaActual = "ESP";
    }
});