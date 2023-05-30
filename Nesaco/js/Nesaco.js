const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonPersonajeJugador = document.getElementById('boton-personaje')
const botonReiniciar = document.getElementById('boton-reiniciar')
const sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje')

const spanPersonajeJugador = document.getElementById('personaje-jugador')
const spanPersonajeEnemigo = document.getElementById('personaje-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataque-del-jugador')
const ataqueDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas=document.getElementById('contenedorTarjetas')
const contenedorAtaques= document.getElementById('contenedorAtaques')

let nesacones= []
let ataqueJugador
let ataqueEnemigo
let opcionNesacones
let inputNegra
let inputSath
let inputCookies
let personajeJugador
let ataquesNesacon
let botonFuego
let botonAgua
let botonTierra
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

let negra= new Nesaco('Negra','./imagenes/Negra.png',5) 
let sath= new Nesaco('Sath','./imagenes/Sath.png',5)
let cookies=new Nesaco('Cookies','./imagenes/Cookies.png',5)

negra.ataques.push(
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🌱', id:'boton-tierra'}

)

sath.ataques.push(
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'}

)

cookies.ataques.push(
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🌱', id:'boton-tierra'}
)

nesacones.push(negra, sath, cookies)

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'

    nesacones.forEach((nesaco)=>{
        opcionNesacones= `
        <input type="radio" name="personaje" id=${nesaco.nombre} />  
        <label class="tarjeta-de-Nesaco" for=${nesaco.nombre}>
            <p>${nesaco.nombre}</p>
            <img src=${nesaco.foto} alt=${nesaco.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML+=opcionNesacones

        inputNegra = document.getElementById('Negra')
        inputSath = document.getElementById('Sath')
        inputCookies = document.getElementById('Cookies')

    })

  
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador)    
  
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
function seleccionarPersonajeJugador() {
    
    sectionSeleccionarPersonaje.style.display = 'none'

    
    sectionSeleccionarAtaque.style.display = 'flex'

    if (inputNegra.checked) { 
        spanPersonajeJugador.innerHTML = inputNegra.id
        personajeJugador=inputNegra.id
    } else if (inputSath.checked) { 
        spanPersonajeJugador.innerHTML = inputSath.id 
        personajeJugador=inputSath.id
    } else if (inputCookies.checked) { 
        spanPersonajeJugador.innerHTML = inputCookies.id
        personajeJugador=inputCookies.id
    } else { 
        alert('Selecciona una personaje') 
    }
    extraerAtaques(personajeJugador)
    seleccionarPersonajeEnemigo()
}

function extraerAtaques(personajeJugador){
    let ataques
    for (let i = 0; i < nesacones.length; i++) {
        if (personajeJugador === nesacones[i].nombre) {
            ataques = nesacones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque)=> {
        ataquesNesaco=`
        <button id=${ataque.id}  class="boton-de-ataque">${ataque.nombre}
        </button>
        `;
        contenedorAtaques.innerHTML += ataquesNesaco
    })

    botonFuego=document.getElementById('boton-fuego')
    botonAgua=document.getElementById('boton-agua')
    botonTierra=document.getElementById('boton-tierra')

    botonFuego.addEventListener('click', ataqueFuego)
    
    botonAgua.addEventListener('click', ataqueAgua)
    
    botonTierra.addEventListener('click', ataqueTierra)
}
function seleccionarPersonajeEnemigo() {
    let personajeAleatoria = aleatorio(0, nesacones.length -1)

    spanPersonajeEnemigo.innerHTML = nesacones [personajeAleatoria].nombre
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