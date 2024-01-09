// Dadas as temperaturas que foram registradas diariamente durante uma 
// semana, deseja-se determinar em quantos dias dessa semana a 
// temperatura esteve acima da média. Crie um vetor de temperatura e 
// exiba o resultado.

const vetorDeTemperaturas = [14,24,18,19,25,27,26]

let mediaTemperaturas = 0;
let result = 0;

for(let i in vetorDeTemperaturas){
     result += vetorDeTemperaturas[i];
}

mediaTemperaturas = result / vetorDeTemperaturas.length;
console.log("A média das temperaturas da semana é:",mediaTemperaturas);

const diasAcimaDaMedia = vetorDeTemperaturas.filter(valor => valor > mediaTemperaturas)

console.log("A quantidade de dias que a temperatura foi acima da média é:",diasAcimaDaMedia.length);

