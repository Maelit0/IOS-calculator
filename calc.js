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
let valor3 = ""
let sinal2 = ""
let temValor3 = false

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
    if (temValor2 == true) {
        resultado.innerHTML = ""
        valor3 += event.target.value
        resultado.innerHTML = valor3
    }
}
function sinal(event) {
    if (temValor1 == false) {
        sinal1 = event.target.value
        temValor1 = true
    }
    if (temValor1 == true) {
        sinal2 = event.target.value
        temValor2 = true
    }
}
function limpar() {
    resultado.innerHTML = '0'
    valor1 = ""
    temValor1 = false
    valor2 = ""
    temValor2 = false
    sinal1 = ""
    temValor3 = false
    sinal2 = ""
    clear.innerHTML = 'AC'
}
function igual() {
    if (sinal1 == "+" && sinal2 =="+") {
        resultadoFinal = parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3)
    } if (sinal1 == "-" && sinal2 == "-" ) {
        resultadoFinal = parseFloat(valor1) - parseFloat(valor2) - parseFloat(valor3)
    } if (sinal1 == "*" && sinal2 == "*") {
        resultadoFinal = parseFloat(valor1) * parseFloat(valor2) * parseFloat(valor3)
    } if (sinal1 == "/" && sinal2 == "/") {
        resultadoFinal = parseFloat(valor1) / parseFloat(valor2) / parseFloat(valor3)
    }
    valor1 = ""
    valor2 = resultadoFinal
    valor3 = ""
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