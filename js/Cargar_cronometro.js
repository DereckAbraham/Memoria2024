let div_cronometro = document.querySelector(".cronometro");
let tiempo;

function iniciar_cronometro(minutos, segundos) {
    div_cronometro.innerHTML = formatTime(minutos, segundos);

    function actualizar() {
        if (segundos === 0 && minutos === 0) {
            clearInterval(tiempo);
        } else {
            segundos--;

            if (segundos < 0) {
                segundos = 59;
                minutos--;
            }

            div_cronometro.innerHTML = formatTime(minutos, segundos);
        }
    }

    tiempo = setInterval(actualizar, 1000);
    return tiempo; // Devuelve el intervalo para poder controlarlo desde otros archivos
}

function formatTime(minutos, segundos) {
    return `${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
}

export { iniciar_cronometro }
