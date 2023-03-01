//variaveis
const maismenos = document.querySelector('#maismenos')
const porcentagem = document.querySelector('#porcentagem')
const clear = document.querySelector('#limpar')
let valor1 = ""
let temValor1 = false
let valor2 = ""
let temValor2 = false
let resultado = document.querySelector('.final')
let sinal1 = ""
let resultadoFinal = ""
//funções
function insert(event) {
    if (temValor1 == false) {
        resultado.innerHTML = ""
        valor1 += event.target.value
        resultado.innerHTML = valor1
        valor1 = + valor1
        clear.innerHTML = 'C'
    }
    if (temValor1 == true) {
        resultado.innerHTML = ""
        valor2 += event.target.value
        resultado.innerHTML = valor2

    }
}
function sinal(event) {
    sinal1 = event.target.value
    temValor1 = true
}
function limpar() {
    resultado.innerHTML = '0'
    valor1 = ""
    temValor1 = false
    valor2 = ""
    temValor2 = false
    sinal1 = ""
    clear.innerHTML = 'AC'
}
function igual() {
    if (sinal1 == "+") {
        resultadoFinal = parseFloat(valor1) + parseFloat(valor2)
    } if (sinal1 == "-") {
        resultadoFinal = parseFloat(valor1) - parseFloat(valor2)
    } if (sinal1 == "*") {
        resultadoFinal = parseFloat(valor1) * parseFloat(valor2)
    } if (sinal1 == "/") {
        resultadoFinal = parseFloat(valor1) / parseFloat(valor2)
    }
    valor1 = resultadoFinal
    valor2 = ""
    resultado.innerHTML = resultadoFinal
}
function negativar() {
    resultado.innerHTML = ''
    if (valor1 != '') {
        resultadoFinal = -valor1
        valor1 = resultadoFinal
        resultado.innerHTML = resultadoFinal
    } 
    if (valor1 == "0" || valor1 == "") {
        resultado.innerHTML = "0"
    }
}
function ponto() {
    if (temValor1 == false) {
        valor1 += '.'
        resultado.innerHTML = valor1
    }
    if (valor2 != "") {
        valor2 += '.'
        resultado.innerHTML = valor2
    }
}
function porcentar() {
    resultado.innerHTML = ""
    if (valor1 != "") {
        resultadoFinal = parseFloat(valor1) / 100
        valor1 = resultadoFinal
        resultado.innerHTML = resultadoFinal
    }
    if (valor1 == "0" || valor1 == "") {
        resultado.innerHTML = "0"
    }
}