let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
    let botonPersonajeJugador = document.getElementById('boton-personaje')
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador)
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
function seleccionarPersonajeJugador() {
    let sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje')
    sectionSeleccionarPersonaje.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let inputNegra = document.getElementById('Negra')

    let inputSath = document.getElementById('Sath')

    let inputCookies = document.getElementById('Cookies')

    let spanPersonajeJugador = document.getElementById('personaje-jugador')


    if (inputNegra.checked) { 
        spanPersonajeJugador.innerHTML = 'Negra' 
    } else if (inputSath.checked) { 
        spanPersonajeJugador.innerHTML = 'Sath' 
    } else if (inputCookies.checked) { 
        spanPersonajeJugador.innerHTML = 'Cookies' 
    } else { alert('Selecciona una personaje') }
    seleccionarPersonajeEnemigo()
}


function seleccionarPersonajeEnemigo() {
    let personajeAleatoria = aleatorio(1, 3)
    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo')

    if (personajeAleatoria == 1) { 
        spanPersonajeEnemigo.innerHTML = 'Negra' 
    } else if (personajeAleatoria == 2) { 
        spanPersonajeEnemigo.innerHTML = 'Sath' 
    } else { spanPersonajeEnemigo.innerHTML = 'Cookies' }
}
function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)
    if (ataqueAleatorio == 1) { 
        ataqueEnemigo = 'FUEGO' 
    } else if (ataqueAleatorio == 2) { 
        ataqueEnemigo = 'AGUA' 
} else { ataqueEnemigo = 'TIERRA' }
    combate()
}
function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    if (ataqueEnemigo == ataqueJugador) { 
        crearMensaje("EMPATE") 
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}
function revisarVidas() { 
    if (vidasEnemigo == 0) { 
        crearMensajeFinal("FELICITACIONES! Ganaste 🎉🎉") 
    } else if (vidasJugador == 0) { 
        crearMensajeFinal('Lo siento, perdiste 😥') } }

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu personaje atacó con ' + ataqueJugador + ', las personaje del enemigo atacó con ' + ataqueEnemigo + '- ' + resultado
    sectionMensajes.appendChild(parrafo)
}
function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}
function reiniciarJuego() { location.reload() }
function aleatorio(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min) }
window.addEventListener('load', iniciarJuego)