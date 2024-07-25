let root = document.querySelector("#root");

let componentes = `
    <header id="header"></header>
    <section class="section_aciertos"></section>
    <div class="tablero"></div>
    <footer></footer>
    <!-- Modal -->

    <div id="modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>¡Nivel Completado!</h2>
            <p id="mensaje-modal">¡Felicidades!</p>
        </div>
    </div>
`;

root.innerHTML = componentes;

