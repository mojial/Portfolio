const imagenIdioma = document.querySelector('.bandera-mini');
const textoLenguaje = document.querySelector('.toggleLenguage');

let idiomaActual = "EN";

console.log(textoLenguaje);

textoLenguaje.addEventListener('click', () => {
    if (idiomaActual === "EN") {
        // Cambiar a español
        textoLenguaje.innerHTML = "ES";
        imagenIdioma.src = "imagenes/spain.png";
        idiomaActual = "ES";
        window.location.href = "../index.html";
    } else {
        // Cambiar a ingles
        textoLenguaje.innerHTML = "EN";
        imagenIdioma.src = "imagenes/engbandera.png"; 
        idiomaActual = "EN";
    }
});

imagenIdioma.addEventListener('click', () => {
    if (idiomaActual === "EN") {
        // Cambiar a inglés
        imagenIdioma.src = "imagenes/spain.png";
        idiomaActual = "ES";
        window.location.href = "../index.html";
    } else {
        // Cambiar a español
        textoLenguaje.innerHTML = "EN";
        imagenIdioma.src = "imagenes/engbandera.png"; 
        idiomaActual = "EN";
    }
});