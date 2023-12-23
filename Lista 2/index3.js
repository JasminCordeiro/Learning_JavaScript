const readline = require("prompt-sync")
const input = readline()

const peso = parseFloat(input('Digite seu peso: '))
const altura = parseFloat(input('Digite a sua altura: '))

const IMC = peso / (altura*altura)

console.log("O seu IMC é: ",IMC) 

if(IMC < 18.5){
    console.log("Abaixo do peso")
}else if(IMC >= 18.5 && IMC <= 24.9){
    console.log("Peso normal")
}else if(IMC >=25 && IMC <= 29.9){
    console.log("Sobrepeso")
}else if(IMC >= 30 && IMC <= 34.9){
    console.log("Obesidade grau 1")
}else if(IMC >= 35 && IMC <= 39.9){
    console.log("Obesidade grau 2")
}else{
    console.log("Obesidade grau 3")
}
