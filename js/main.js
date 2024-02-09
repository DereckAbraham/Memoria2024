let cards1 = ["👾","🤡","👺","🐭","🍀","🍉","🚗","☀️","🔥","☂️","🌟","🕶️"]
let cards2 = ["👾","🤡","👺","🐭","🍀","🍉","🚗","☀️","🔥","☂️","🌟","🕶️"]

let total = cards1.concat(cards2)

//ELEMENTOS

let tablero = document.querySelector("#root")


function repartir_cartas() {

    total.forEach((cada_carta) => {

        let carta = document.createElement ("div")
        carta.innerHTML = `<div class="carta">${cada_carta}</div>`;

        tablero.appendChild(carta)
    });


}

repartir_cartas()