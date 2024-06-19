// Desestructuración e Importacion de Objetos
import { barcelona, roma, paris, londres } from './ciudades.js'

// Obtener elementos del Dom
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')
console.log(enlaces);

// Agregar un evento CLICK a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {

    // Remover la clase ACTIVE de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');    
        });      
        
     // Agregar la clase ACTIVE al enlace actual
            this.classList.add('active');

    // Obtener el contenido según el enlace
        let contenido = obtenerContenido(this.textContent);

        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    });    
});


// Función traer información desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'Paris': paris,
        'Londres': londres
    };
    return contenido[enlace]   
};