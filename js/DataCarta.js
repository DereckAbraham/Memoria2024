// Datos de cartas por nivel
export const cartasNivel0 = ["🏎️", "🚗"];
export const cartasNivel1 = ["🏎️", "🚗", "🏍️", "✈️"];
export const cartasNivel2 = ["🏎️", "🚘", "🚒", "🚗", "🏍️", "✈️"];
export const cartasNivel3 = ["🏎️", "🚘", "🚒", "🚗", "🏍️", "✈️", "🛺", "🛴"];
export const cartasNivel4 = ["🏎️", "🚘", "🚒", "🚗", "🏍️", "✈️", "🛺", "🛴", "🍀", "🐭"];
export const cartasNivel5 = ["🏎️", "🚘", "🚒", "🚗", "🏍️", "✈️", "🛺", "🛴", "🍀", "🐭", "🚍", "🔥"];

// Lista de cartas por nivel
export const lista_cartas_nivel = [
    cartasNivel0,
    cartasNivel1,
    cartasNivel2,
    cartasNivel3,
    cartasNivel4,
    cartasNivel5
];



export let cards1 = ["🏎️", "🚗"];
export let cards2 = ["🏎️", "🚗"];

// Función para crear aleatoriedad
function ordenarAleatorio(a, b) {
    return Math.random() - 0.5;
}

// Unificar las listas
let todas_las_tarjetas = cards1.concat(cards2);


// Organiza de forma aleatoria la lista todas_las_cartas
todas_las_tarjetas.sort(ordenarAleatorio);

export let lista_random = todas_las_tarjetas;
