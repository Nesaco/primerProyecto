function iniciarJuego() {
    let botonPersonaje=document.getElementById('boton-personaje')
    botonPersonaje.addEventListener('click', seleccionarPersonaje)
}

function seleccionarPersonaje() {
    let input1=document.getElementById('Hipodoge')
    let input2=document.getElementById('Capipepo')
    let input3=document.getElementById('Ratigueya')
    let spamJugador=document.getElementById('personaje-jugador')


    if(input1.checked) {
        spamJugador.innerHTML='HIPODOGE'
    } else if(input2.checked){
        spamJugador.innerHTML='CAPIPEPO'
    }else if(input3.checked){
        spamJugador.innerHTML='RATIGUEYA'
    }else {
        alert('SELECCIONA UN PERSONAJE')
    }
}

window.addEventListener('load', iniciarJuego)