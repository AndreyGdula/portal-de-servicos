const emailInput = document.querySelector('input#email')
const passwordInput = document.querySelector('input#password')
const confirmPasswordInput = document.querySelector('input#confirm-password')
const usernameInput = document.querySelector('input#username')
const btnCreateForm = document.querySelector('#create-btn')

inputs = [emailInput, passwordInput, confirmPasswordInput, usernameInput]
inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (emailInput.value != '' && passwordInput.value != '' && confirmPasswordInput.value != '' && usernameInput.value != '') {
            btnCreateForm.disabled = false
        } else {
            btnCreateForm.disabled = true
        }
    })
})

btnCreateForm.addEventListener('click', () => {
    const email = emailInput.value
    const password = passwordInput.value
    const confirmPassword = confirmPasswordInput.value

    if (emailInput.validity.typeMismatch) {
        alert('Por favor, insira um email válido.')
        return
    } else if (password.length < 8) {
        alert('A senha deve conter pelo menos 8 caracteres. Por favor, escolha uma senha mais forte.')
        return
    } else if (password != confirmPassword) {
        alert('As senhas não coincidem. Por favor, verifique e tente novamente.')
        return
    } else {
        window.location.href = '/pages/login.html'
    }
})