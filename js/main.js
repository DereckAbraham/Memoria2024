let cards1 = ["👾","🤡","👺","🐭","🍀","🍉","🚗","☀️","🔥","☂️","🌟","🕶️"]
let cards2 = ["👾","🤡","👺","🐭","🍀","🍉","🚗","☀️","🔥","☂️","🌟","🕶️"]

let todaCartas = cards1.concat(cards2)

function repartir_Cartas(){
    let tablero = document.querySelector("#root")
    todaCartas.forEach((cada_Carta)=>{
        let carta = document.createElement("div")
        carta.classList.add("carta_trasera")
        carta.innerHTML = `<div class="carta_frontal">${cada_Carta}</div>`;
        //agrega un elemento hijo a este div, tiene que ser un createElement
        tablero.appendChild(carta)
    })
}




repartir_Cartas();