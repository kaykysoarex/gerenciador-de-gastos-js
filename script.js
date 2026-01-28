const input = document.querySelector('#input')
const botao = document.querySelector('#btn')
const msg = document.querySelector('#mensagem')
const valorTotal = document.querySelector('#total')
const container = document.querySelector('#container')
const inputDescricao = document.querySelector('#descricao')

function mensagemDeErro(mensagem) {
  msg.textContent = mensagem
}

botao.addEventListener('click', () => {
  const inputValor = input.value.trim()
  const converteNumber = Number(inputValor)

  const valorDigitado = input.value
  const valorDescricao = inputDescricao.value
  const totalGastos =
  {
    valor: Number(valorDigitado),
    descricao: valorDescricao
  }

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

  if (valorDescricao.trim() === '') {
    mensagemDeErro('Campo descrição vazio!')
    return
  }
  inputDescricao.value = ''
  gastos.push(totalGastos)

  salvaArray(gastos)
  mostraTotal() //// Atualiza e recalcula o total de gastos a cada validação
  renderizaLista()

  msg.textContent = `Valor aceito: ${converteNumber}`
  input.value = ''
})

input.addEventListener('input', () => {
  msg.textContent = ''
})

let gastos = carregaArray()
mostraTotal()
renderizaLista()

function salvaArray(array) {
  const arrayTrans = JSON.stringify(array)
  localStorage.setItem('arrayGastos', arrayTrans) //nesta funçao recebo um parametro de array, trannformo meu array em string, e salvo ele em localStorage.
  //transformo em string antes de salvar, pois localStorage so aceita string
}

function carregaArray() {
  const buscaItem = JSON.parse(localStorage.getItem('arrayGastos') || '[]')
  return buscaItem /*“Busca os gastos salvos.
Se não existir nada, usa um array vazio.
Converte de texto para array.
Entrega o array.”*/
  //Json.parse: converte de texto para array
  //JSON.stringify: converte de array para texto
}

salvaArray(gastos)

function calcularTotal(array) {
  return array.reduce((acc, gasto) => {
    return acc + gasto.valor
  }, 0)
}
calcularTotal(gastos)

function mostraTotal() {
  valorTotal.textContent = calcularTotal(gastos)
}

function renderizaLista() {
  container.innerHTML = ''//apaga tudo que esta dentro da div

  gastos.forEach(gasto => {
    const elementoCriado = document.createElement('p')
    elementoCriado.textContent = `${gasto.descricao} ${gasto.valor}`
    container.appendChild(elementoCriado)
  });
}