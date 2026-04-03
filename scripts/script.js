const btnEnter = document.querySelector('#btn-enter')
const btnHome = document.querySelector('#btn-home')
const btnLogout = document.querySelector('#btn-logout')
const btnCreate = document.querySelector('#create-btn')
const btnCancelPost = document.querySelector('#cancel-post-btn')
const btnVerMais = document.querySelectorAll('.ver-mais')

btnEnter?.addEventListener('click', () => {
    window.location.href = '/pages/login.html'
})

btnHome?.addEventListener('click', () => {
    window.location.href = '../index.html'
})

btnLogout?.addEventListener('click', () => {
    window.location.href = '../pages/login.html'
})

btnCancelPost?.addEventListener('click', () => {
    window.location.href = '/pages/perfil.html'
})

btnVerMais.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('funcionalidade em desenvolvimento')
    })
})