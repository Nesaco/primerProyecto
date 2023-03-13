function iniciarJuego() {
    let botonPersonaje=document.getElementById('boton-personaje')
    botonPersonaje.addEventListener('click', seleccionarPersonaje)
}

function seleccionarPersonaje() {
    alert('SELECCIONAR TU PERSONAJE')
}
let botonPersonaje=document.getElementById('boton-personaje')
botonPersonaje.addEventListener('click', seleccionarPersonaje)
window.addEventListener('load', iniciarJuego)