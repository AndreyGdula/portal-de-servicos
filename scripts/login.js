const emailInput = document.querySelector('input#email')
const passwordInput = document.querySelector('input#password')
const btnLoginForm = document.querySelector('#login-btn')

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