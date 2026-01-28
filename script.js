const input = document.querySelector('#input')
const botao = document.querySelector('#btn')
const msg = document.querySelector('#mensagem')

function mensagemDeErro(mensagem) {
  msg.textContent = mensagem
}

botao.addEventListener('click', () => {
  const inputValor = input.value.trim()
  const converteNumber = Number(inputValor)

  if (inputValor === '') {
    mensagemDeErro('Campo vazio!')
    return
  }

  if (Number.isNaN(converteNumber)) {
    mensagemDeErro('Valor inválido!')
    return
  }

  if (converteNumber <= 0) {
    mensagemDeErro('Digite um valor maior que 0!')
    return
  }

  msg.textContent = `Valor aceito: ${converteNumber}`
  input.value = ''
})

input.addEventListener('input', () => {
  msg.textContent = ''
})
