// Desenvolva uma função que receba um vetor de números como parâmetro e
// retorne um novo vetor apenas com os números positivos.


function filtrarNumerosPositivos(vetor) {
    if (!Array.isArray(vetor)) {
      return "Parâmetro inválido. Forneça um vetor de números.";
    }
  
    const numerosPositivos = vetor.filter(numero => numero > 0);
  
    return numerosPositivos;
  }
  
  const vetorOriginal = [-2, 5, -8, 10, -15, 20, -25];
  const vetorPositivo = filtrarNumerosPositivos(vetorOriginal);
  
  console.log("Vetor Original: ", vetorOriginal);
  console.log("Vetor Apenas com Números Positivos: ", vetorPositivo);
  