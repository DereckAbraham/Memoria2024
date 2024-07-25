import { Cargar_acierto } from "./Cargar_acierto.js";
import { Actualizar_vidas } from "./Actualizar_vidas.js";
import { Cargar_puntos } from "./Puntos.js";
import { vidas } from "./Actualizar_vidas.js";
import { iniciar_cronometro } from "./Cargar_cronometro.js";

let todas_las_cartas = document.querySelectorAll(".carta_trasera");

let contador_de_cartas = 0;
let estado_del_cronometro = false; // Cambiar a booleano para un mejor control

function iniciarJuego() {
    todas_las_cartas.forEach((cada_div) => {
        cada_div.addEventListener("click", () => {
            // Asegúrate de que el cronómetro se inicie solo una vez
            if (!estado_del_cronometro) {
                estado_del_cronometro = true;
                iniciar_cronometro(0, 60);
            }

            /* CANTIDAD DE CARTAS DESCUBIRTAS */
            let cartas_descubiertas = document.querySelectorAll(".activar");
            if (cartas_descubiertas.length < 2) {
                cada_div.classList.add("activar");
                cartas_descubiertas = document.querySelectorAll(".activar");

                if (cartas_descubiertas.length === 2) {
                    let carta_1 = cartas_descubiertas[0].textContent;
                    let carta_2 = cartas_descubiertas[1].textContent;

                    if (carta_1 === carta_2) {
                        contador_de_cartas++;

                        if (contador_de_cartas === todas_las_cartas.length / 2) {
                            Cargar_puntos(vidas.length);
                        }

                        setTimeout(() => {
                            cartas_descubiertas.forEach((carta) => {
                                carta.classList.remove("activar");
                                carta.classList.add("ocultar");
                            });
                            Cargar_acierto(carta_1); //🥱 Muy fácil
                        }, 1000);

                    } else {
                        Actualizar_vidas(false);

                        setTimeout(() => {
                            cartas_descubiertas.forEach((cada_carta_descubierta) => {
                                cada_carta_descubierta.classList.remove("activar");
                            });
                        }, 1000);
                    }
                }
            }
        });
    });
}

// Llama a la función para iniciar el juego
iniciarJuego();
