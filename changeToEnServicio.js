const imagenIdioma = document.querySelector('.bandera-mini');
const textoLenguaje = document.querySelector('.toggleLenguage');

let idiomaActual = "ES";

textoLenguaje.addEventListener('click', () => {
    if (idiomaActual === "ES") {
        // Cambiar a inglés
        textoLenguaje.innerHTML = "EN";
        imagenIdioma.src = "imagenes/engbandera.png";
        idiomaActual = "EN";
        window.location.href = "index-eng/serviceseng.html";
    } else {
        // Cambiar a español
        textoLenguaje.innerHTML = "ES";
        imagenIdioma.src = "imagenes/spain.png"; 
        idiomaActual = "ES";
    }
});

imagenIdioma.addEventListener('click', () => {
    if (idiomaActual === "ES") {
        // Cambiar a inglés
        textoLenguaje.innerHTML = "EN";
        imagenIdioma.src = "imagenes/engbandera.png";
        idiomaActual = "EN";
        window.location.href = "index-eng/serviceseng.html";
    } else {
        // Cambiar a español
        textoLenguaje.innerHTML = "ES";
        imagenIdioma.src = "imagenes/spain.png";
        idiomaActual = "ES";
    }
});