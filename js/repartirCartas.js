import { lista_cartas_nivel } from "./DataCarta.js";
import { iniciar_cronometro } from "./Cargar_cronometro.js";

let nivelActual = 0;
let primeraCarta = null; // Para almacenar la primera carta seleccionada
let segundaCarta = null;  // Para almacenar la segunda carta seleccionada
let tiempo; // Variable para almacenar la referencia del cronómetro
let tiempoInicio; // Variable para almacenar el tiempo de inicio del nivel

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
    tablero.innerHTML = ''; // Limpia el tablero antes de repartir las nuevas cartas

    cartas.forEach((cada_carta) => {
        let carta = document.createElement("div");
        carta.classList.add("carta_trasera");
        carta.innerHTML = `<div class="carta_frontal">${cada_carta}</div>`;
        carta.addEventListener('click', manejarClickCarta); // Maneja el click en las cartas
        tablero.appendChild(carta);
    });

    tiempoInicio = Date.now(); // Registra el tiempo de inicio del nivel
    console.log(`Nivel actual: ${nivelActual}`); // Imprime el nivel actual en consola
}

function manejarClickCarta(event) {
    let carta = event.currentTarget;

    // Asegúrate de que solo se pueda descubrir la carta si no ha sido descubierta
    if (!carta.classList.contains('descubierta') && !carta.classList.contains('comparando')) {
        carta.classList.add('descubierta'); // Aquí se aplica el estilo de carta descubierta

        if (!primeraCarta) {
            primeraCarta = carta; // Guarda la primera carta
        } else {
            segundaCarta = carta; // Guarda la segunda carta

            if (primeraCarta && segundaCarta) {
                if (primeraCarta.innerHTML === segundaCarta.innerHTML) {
                    // Las cartas coinciden
                    primeraCarta = null;
                    segundaCarta = null;

                    if (todasLasCartasDescubiertas()) {
                        setTimeout(() => {
                            mostrarModal();
                        }, 500); // Tiempo para que el usuario vea el resultado antes de cambiar de nivel
                    }
                } else {
                    // Las cartas no coinciden
                    primeraCarta.classList.add('comparando'); // Marca la primera carta como en comparación
                    segundaCarta.classList.add('comparando'); // Marca la segunda carta como en comparación
                    setTimeout(() => {
                        if (primeraCarta && segundaCarta) {
                            primeraCarta.classList.remove('descubierta');
                            segundaCarta.classList.remove('descubierta');
                            primeraCarta.classList.remove('comparando');
                            segundaCarta.classList.remove('comparando');
                            primeraCarta = null;
                            segundaCarta = null;
                        }
                    }, 1000); // Tiempo para mostrar las cartas antes de ocultarlas
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
    console.log(`Nivel cambiado a: ${nivelActual}`); // Imprime el nivel actualizado en consola

    if (nivelActual < lista_cartas_nivel.length) {
        repartir_cartas(construir_nivel(nivelActual));
        reiniciarCronometro(); // Reinicia el cronómetro al cambiar de nivel
    } else {
        // Aquí puedes añadir lógica para cuando se terminen todos los niveles
        alert("¡Felicidades! Has completado todos los niveles.");
    }
}

function reiniciarCronometro() {
    clearInterval(tiempo); // Detén el cronómetro actual
    tiempo = iniciar_cronometro(1, 0); // Reinicia el cronómetro (ajusta minutos y segundos según sea necesario)
}

function mostrarModal() {
    let modal = document.getElementById("modal");
    let mensajeModal = document.getElementById("mensaje-modal");
    let tiempoFinal = Date.now();
    let tiempoTranscurrido = Math.floor((tiempoFinal - tiempoInicio) / 1000); // Tiempo en segundos

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

// Inicializa el juego con el nivel 0
repartir_cartas(construir_nivel(nivelActual));
tiempo = iniciar_cronometro(1, 0); // Inicializa el cronómetro con el tiempo deseado
