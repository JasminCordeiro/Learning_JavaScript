// A partir de um vetor de números de 10 posições, encontre a média dos 
// números pares presentes no vetor.

const vetor = [2,2,2,6,2,4,1,1,1,1]
const valorpar = [];
let result = 0;

 for(let i in vetor){
     if(vetor[i] % 2 === 0 ){
         valorpar.push(vetor[i]);
    }
}

for(let j in valorpar){
    result += valorpar[j];
}

console.log("O vetor de números pares:",valorpar)
console.log("O valor da média da soma de números pares do vetor é:",result/valorpar.length)




