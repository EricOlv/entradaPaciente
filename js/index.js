const botaoAdc = document.querySelector('[btn-adc]')
const nomeQuery = document.querySelector('[n-pac]')
const rgQuery = document.querySelector('[rg-pac]')

function nomePaciente() {
    const nomePaciente = nomeQuery.value 
    return nomePaciente
}

function rgPaciente() {
    const rgPaciente = rgQuery.value
    return rgPaciente
}

function adicionaPaciente() {
    const dados = document.querySelector('[dados]')
    const criandoTr = document.createElement('tr')
    const criandoTdNome = document.createElement('td')
    const criandoTdRG = document.createElement('td')

    criandoTdNome.innerHTML = nomePaciente()
    criandoTdRG.innerHTML = rgPaciente()
    
    dados.appendChild(criandoTr)
    criandoTr.appendChild(criandoTdNome)
    criandoTr.appendChild(criandoTdRG)
    
    nomeQuery.value = ''
    rgQuery.value = '' 
}

botaoAdc.addEventListener('click', (e) => {
    e.preventDefault()
    adicionaPaciente()
})