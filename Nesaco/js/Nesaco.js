const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonPersonajeJugador = document.getElementById('boton-personaje')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje')

const inputNegra = document.getElementById('Negra')
const inputSath = document.getElementById('Sath')
const inputCookies = document.getElementById('Cookies')
const spanPersonajeJugador = document.getElementById('personaje-jugador')
const spanPersonajeEnemigo = document.getElementById('personaje-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataque-del-jugador')
const ataqueDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas=document.getElementById('contenedorTarjetas')

let Nesacones= []
let ataqueJugador
let ataqueEnemigo
let opcionNesacones
let vidasJugador = 3
let vidasEnemigo = 3

class Nesaco {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto= foto
        this.vida=vida
        this.ataques=[]
    }
}

let Negra= new Nesaco('Negra','./imagenes/Negra.png',5) 
let Sath= new Nesaco('Sath','./imagenes/Sath.png',5)
let Cookies=new Nesaco('Cookies','./imagenes/Cookies.png',5)

Negra.ataques.push(
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🌱', id:'boton-tierra'}

)

Sath.ataques.push(
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'}

)

Cookies.ataques.push(
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🌱', id:'boton-tierra'}
)

Nesacones.push(Negra, Sath, Cookies)

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'

    Nesacones.forEach((Nesacon)=>{
        opcionNesacones= `
        <input type="radio" name="personaje" id=${Nesaco.nombre} />  
        <label class="tarjeta-de-Nesaco" for=${Nesaco.nombre}>
            <p>${Nesaco.nombre}/p>
            <img src=${Nesaco.foto} alt=${Nesaco.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML=opcionNesacones

    })
    sectionReiniciar.style.display = 'none'    
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador)    
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
function seleccionarPersonajeJugador() {
    
    sectionSeleccionarPersonaje.style.display = 'none'

    
    sectionSeleccionarAtaque.style.display = 'flex'

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

    

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML=resultado
    nuevoAtaqueDelJugador.innerHTML=ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML=ataqueEnemigo
    

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal) {
    

    sectionMensajes.innerHTML = resultadoFinal

    
    
    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonTierra.disabled = true
    
    sectionReiniciar.style.display = 'block'
}
function reiniciarJuego() { location.reload() }
function aleatorio(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min) }
window.addEventListener('load', iniciarJuego)