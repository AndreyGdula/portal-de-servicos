const emailInput = document.querySelector('input#email')
const passwordInput = document.querySelector('input#password')
const btnLoginForm = document.querySelector('#login-btn')
const togglePassword = document.querySelector('#toggle-password')
const btnLogin = document.querySelector('#login-btn')

function loginRedirect() {
    window.location.href = '/pages/perfil.html'
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !btnLoginForm.disabled) {
        loginRedirect()
    }
})
btnLogin.addEventListener('click', loginRedirect)

const inputsLogin = [emailInput, passwordInput]
inputsLogin.forEach(input => {
    input.addEventListener('input', () => {
        if (emailInput.value != '' && passwordInput.value != '') {
            btnLoginForm.disabled = false
        } else {
            btnLoginForm.disabled = true
        }
    })
})

togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'
    togglePassword.textContent = type === 'password' ? 'visibility' : 'visibility_off'
    passwordInput.setAttribute('type', type)
})