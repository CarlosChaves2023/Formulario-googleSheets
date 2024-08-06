const scriptUrl = 'https://script.google.com/macros/s/AKfycbzzYd7FJwQ8-EzQHpcTVN8bSKN0KlZmXnjLN47inooJ6300oyZ__RBTIeN_GCJ4nb8h/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptUrl, { method: 'POST', body: new FormData(form)})
    .then(respponse => alert("Obrigado! Seu formulário foi enviado com sucesso.")) 
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Erro!', error.message))
})