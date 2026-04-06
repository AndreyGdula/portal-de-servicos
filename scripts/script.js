const btnEnter = document.querySelector('#btn-enter')
const btnHome = document.querySelector('#btn-home')
const btnLogout = document.querySelector('#btn-logout')
const btnCreate = document.querySelector('#create-btn')
const btnCancelPost = document.querySelector('#cancel-post-btn')
const btnVerMais = document.querySelectorAll('.ver-mais')

btnEnter?.addEventListener('click', () => {
    window.location.href = 'pages/login.html'
})

btnHome?.addEventListener('click', () => {
    window.location.href = '../index.html'
})

btnLogout?.addEventListener('click', () => {
    window.location.href = 'pages/login.html'
})

btnCancelPost?.addEventListener('click', () => {
    window.location.href = 'pages/perfil.html'
})

btnVerMais.forEach(btn => {
    btn.addEventListener('click', (e) => {

        const card = e.target.closest('.card')

        const titulo = card.querySelector('.titulo').innerText
        const categoria = card.querySelector('.categoria').innerText
        const nome = card.querySelector('.nome').innerText
        const imagem = card.querySelector('.card-img').src

        const dados = {
            titulo,
            categoria,
            nome,
            imagem
        }

        localStorage.setItem('dadosCard', JSON.stringify(dados))
        window.location.href = 'pages/detalhes.html'
    })
})

document.addEventListener("DOMContentLoaded", function () {
    const buscaInput = document.getElementById("search-input");
    const escolhaCategoria = document.getElementById("categoria");
    const escolhaEstrela = document.getElementById("estrelas");
    const cards = document.querySelectorAll(".service-container .card");

    function filtrarCards() {
        const localizaInput = buscaInput.value.trim().toLowerCase();
        const selecionadaCategoria = escolhaCategoria.value.toLowerCase();
        const selecionadaEstrela = escolhaEstrela.value;

        cards.forEach((card) => {
            const titulo = card.querySelector("h2")?.textContent.trim().toLowerCase() || "";
            const categoriaTexto = card.querySelector("h3")?.textContent.trim().toLowerCase() || "";
            const categoria = categoriaTexto.replace("categoria:", "").trim();
            const contagemEstrelas = card.querySelectorAll(".stars-box .material-symbols-outlined").length;
            const matchNome = titulo.includes(localizaInput);
            const matchCategoria = selecionadaCategoria === "" || categoria === selecionadaCategoria;
            const matchNota = selecionadaEstrela === "" || contagemEstrelas === Number(selecionadaEstrela);

            if (matchNome && matchCategoria && matchNota) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    buscaInput.addEventListener("input", filtrarCards);
    escolhaCategoria.addEventListener("change", filtrarCards);
    escolhaEstrela.addEventListener("change", filtrarCards);
});