let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    let botonPersonaje = document.getElementById('boton-personaje')
    botonPersonaje.addEventListener('click', seleccionarPersonaje)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton.tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarPersonaje() {
    let input1 = document.getElementById('Hipodoge')
    let input2 = document.getElementById('Capipepo')
    let input3 = document.getElementById('Ratigueya')
    let spanJugador = document.getElementById('personaje-jugador')


    if (input1.checked) {
        spanJugador.innerHTML = 'HIPODOGE'
    } else if (input2.checked) {
        spanJugador.innerHTML = 'CAPIPEPO'
    } else if (input3.checked) {
        spanJugador.innerHTML = 'RATIGUEYA'
    } else {
        alert('SELECCIONA UN PERSONAJE')
    }
    seleccionarPersonjeEnemigo()

}

function seleccionarPersonjeEnemigo() {
    let personajeAleatorio = aleatorio(1, 3)
    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo')

    if (personajeAleatorio == 1) {
        spanPersonajeEnemigo.innerHTML = 'HIPODOGE'
    }
    else if (personajeAleatorio == 2) {
        spanPersonajeEnemigo.innerHTML = 'CAPIPEPO'
    } else if (personajeleatorio == 3) {
        spanPersonajeEnemigo.innerHTML = 'RATIGUEYA'
    }

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
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}
function combate() {
    if (ataqueEnemigo == ataqueJugador) {
        alecrearMensajert("EMPATE")
    }
    else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
    }
    else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")

    }
    else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")

    }
    else {
        crearMensaje("PERDISTE")

    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes');
    console.log({ sectionMensajes });
    let parrafo = document.createElement('p')
    console.log({ parrafo });
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', las mascota del enemigo atacó con ' + ataqueEnemigo + '-'+ resultado
    sectionMensajes.appendChild(parrafo)
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)


