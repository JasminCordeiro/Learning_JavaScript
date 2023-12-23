// Faça um código que a partir um número, exiba o dia correspondente da
// semana. (1-Domingo, 2- Segunda, etc..), se outro valor for informado deve
// aparecer valor inválido

const readline = require ('prompt-sync')
const input = readline()

const day = parseInt(input('Digite um numero de 1 à 7 para retornar o dia da semana:'))

switch (day) {
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda")
        break;
    case 3:
        console.log("Terça")
        break;
    case 4:
        console.log("Quarta")
        break;
    case 5:
        console.log("Quinta") 
        break;
    case 6:
        console.log("Sexta")
        break;
    case 7:
        console.log("Sábado")
        break;
    default:
        console.log("Opção inválida!")
        break;
}