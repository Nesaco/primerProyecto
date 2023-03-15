let ataqueJugador

function iniciarJuego() {
    let botonPersonaje=document.getElementById('boton-personaje')
    botonPersonaje.addEventListener('click', seleccionarPersonaje)

    let botonFuego=document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua=document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra=document.getElementById('boton.tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarPersonaje() {
    let input1=document.getElementById('Hipodoge')
    let input2=document.getElementById('Capipepo')
    let input3=document.getElementById('Ratigueya')
    let spanJugador=document.getElementById('personaje-jugador')


    if(input1.checked) {
        spanJugador.innerHTML='HIPODOGE'
    } else if(input2.checked){
        spanJugador.innerHTML='CAPIPEPO'
    }else if(input3.checked){
        spanJugador.innerHTML='RATIGUEYA'
    }else {
        alert('SELECCIONA UN PERSONAJE')
    }
    seleccionarPersonjeEnemigo()
        let ataqueAleatorio=aleatorio(1,3)
        let spanPersonajeEnemigo=document.getElementById('personaje-enemigo')

        if(ataqueAleatorio==1){
            spanPersonajeEnemigo.innerHTML='HIPODOGE'
        }
        else if(ataqueAleatorio==2){
            spanPersonajeEnemigo.innerHTML='CAPIPEPO'
        }else if(ataqueAleatorio==3){
            spanPersonajeEnemigo.innerHTML='RATIGUEYA'
        }
}   
function seleccionarPersonjeEnemigo(){

}

function ataqueFuego(){
    ataqueJugador='FUEGO'
    alert(ataqueJugador)
}
function ataqueAgua(){
    ataqueJugador='AGUA'
    alert(ataqueJugador)
}
function ataqueTierra(){
    ataqueJugador='TIERRA'
    alert(ataqueJugador)
}


function aleatorio(min,max){
        return Math.floor(Math.random()*((max-min+1)+min))
}


window.addEventListener('load', iniciarJuego)