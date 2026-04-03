const usernameLabel = document.querySelector('h3#username')
const phoneLabel = document.querySelector('h3#phone')
const emailLabel = document.querySelector('h3#email')
const btnPost = document.querySelector('#btn-post')
const btnDeleteAccount = document.querySelector('#delete-account-btn')
const btnDeleteCard = document.querySelectorAll('.delete-card-btn')
const btnEditCard = document.querySelectorAll('.edit-card-btn')

btnPost.addEventListener('click', () => {
    window.location.href = '../pages/post-service.html'
})

btnDeleteAccount.addEventListener('click', () => {
    alert('funcionalidade em desenvolvimento')
})

btnDeleteCard.forEach(btn => {
    btn.addEventListener('click', () => {
        const confirmDelete = confirm('Tem certeza que deseja excluir este serviço? Não é possível reverter esta ação.')
        if (!confirmDelete) return
        else {
            const card = btn.closest('.card')
            card.remove()
        }
        
    })
})

btnEditCard.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('funcionalidade em desenvolvimento')
    })
})