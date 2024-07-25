import { lista_cartas_nivel } from "./DataCarta.js";
import { iniciar_cronometro } from "./Cargar_cronometro.js";

let nivelActual = 0;
let primeraCarta = null;
let segundaCarta = null;  
let tiempo;
let tiempoInicio; 
function construir_nivel(nivel) {
    function ordenarAleatorio(a, b) {
        return Math.random() - 0.5;
    }

    let todas_las_tarjetas = lista_cartas_nivel[nivel].concat(lista_cartas_nivel[nivel]);
    todas_las_tarjetas.sort(ordenarAleatorio);

    return todas_las_tarjetas;
}

function repartir_cartas(cartas) {
    let tablero = document.querySelector(".tablero");
    tablero.innerHTML = ''; 

    cartas.forEach((cada_carta) => {
        let carta = document.createElement("div");
        carta.classList.add("carta_trasera");
        carta.innerHTML = `<div class="carta_frontal">${cada_carta}</div>`;
        carta.addEventListener('click', manejarClickCarta); 
        tablero.appendChild(carta);
    });

    tiempoInicio = Date.now(); 
    console.log(`Nivel actual: ${nivelActual}`); 
}

function manejarClickCarta(event) {
    let carta = event.currentTarget;

   
    if (!carta.classList.contains('descubierta') && !carta.classList.contains('comparando')) {
        carta.classList.add('descubierta'); 
        if (!primeraCarta) {
            primeraCarta = carta; 
        } else {
            segundaCarta = carta; 

            if (primeraCarta && segundaCarta) {
                if (primeraCarta.innerHTML === segundaCarta.innerHTML) {
  
                    primeraCarta = null;
                    segundaCarta = null;

                    if (todasLasCartasDescubiertas()) {
                        setTimeout(() => {
                            mostrarModal();
                        }, 500); 
                    }
                } else {

                    primeraCarta.classList.add('comparando'); 
                    segundaCarta.classList.add('comparando'); 
                    setTimeout(() => {
                        if (primeraCarta && segundaCarta) {
                            primeraCarta.classList.remove('descubierta');
                            segundaCarta.classList.remove('descubierta');
                            primeraCarta.classList.remove('comparando');
                            segundaCarta.classList.remove('comparando');
                            primeraCarta = null;
                            segundaCarta = null;
                        }
                    }, 1000);
                }
            }
        }
    }
}

function todasLasCartasDescubiertas() {
    let cartasDescubiertas = document.querySelectorAll('.carta_trasera'); 
    return Array.from(cartasDescubiertas).every(carta => carta.classList.contains('descubierta'));
}

function actualizarNivel() {
    nivelActual++;
    console.log(`Nivel cambiado a: ${nivelActual}`); 

    if (nivelActual < lista_cartas_nivel.length) {
        repartir_cartas(construir_nivel(nivelActual));
        reiniciarCronometro(); 
    } else {
        alert("¡Felicidades! Has completado todos los niveles.");
    }
}

function reiniciarCronometro() {
    clearInterval(tiempo); 
    tiempo = iniciar_cronometro(1, 0); 
}

function mostrarModal() {
    let modal = document.getElementById("modal");
    let mensajeModal = document.getElementById("mensaje-modal");
    let tiempoFinal = Date.now();
    let tiempoTranscurrido = Math.floor((tiempoFinal - tiempoInicio) / 1000); 

    mensajeModal.innerHTML = `¡Felicidades! Has completado el nivel en ${tiempoTranscurrido} segundos.`;
    modal.style.display = "block";

    let span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
        actualizarNivel();
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            actualizarNivel();
        }
    }
}


repartir_cartas(construir_nivel(nivelActual));
tiempo = iniciar_cronometro(1, 0); 
