//  A partir da idade de uma pessoa e informe a sua classe eleitoral:
// - não eleitor (abaixo de 16 anos);
// - eleitor obrigatório (entre a faixa de 18 e menor de 65 anos);
// - eleitor facultativo (de 16 até 18 anos e maior de 65 anos, inclusive

const readline = require("prompt-sync")
const input = readline()

const age = parseInt(input('Digite sua idade:'))

if(age < 16){
    console.log("Não eleitor")
}else if(age >= 18 && age < 65 ){
    console.log("Eleitor obrigatório")
}else{
    console.log("Eleitor facultativo") 
}
    

