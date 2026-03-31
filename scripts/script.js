const btnEnter = document.querySelector('#btn-enter')
const btnHome = document.querySelector('#btn-home')
const btnLogin = document.querySelector('#login-btn')
const btnLogout = document.querySelector('#btn-logout')
const btnPost = document.querySelector('#btn-post')
const btnCreate = document.querySelector('#create-btn')

btnEnter?.addEventListener('click', () => {
    window.location.href = '/pages/login.html'
})

btnHome?.addEventListener('click', () => {
    window.location.href = '../index.html'
})

btnLogin?.addEventListener('click', () => {
    window.location.href = '/pages/perfil.html'
})

btnLogout?.addEventListener('click', () => {
    window.location.href = '../index.html'
})

btnPost?.addEventListener('click', () => {
    window.location.href = '../pages/post-service.html'
})

btnCreate?.addEventListener('click', () => {
    window.location.href = '../pages/login.html'
})