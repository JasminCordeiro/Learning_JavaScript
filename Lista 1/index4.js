//Faça um programa que peca a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
//Formula: Fahrenheit = Celsius x 1,8 + 32

const readline = require ('prompt-sync')
const input = readline()

const temperatura = parseFloat(input('Digite a temperatura em graus Fahrenheit: '))
const formula = (temperatura - 32)/1.8
console.log(`${temperatura} Fahrenheit em Celsius é: ${formula}`)