// Crie uma função que converta o valor de uma determinada moeda para real,
// esta função receberá como parâmetros o valor a ser convertido, a moeda de
// origem, retorne o valor convertido.
// Exemplos de taxas
// USD: 5.35, // 1 USD = 5.35 BRL
// EUR: 6.38, // 1 EUR = 6.38 BRL
// ARS: 0.056 // 1 ARS = 0.056 BRL

function converteMoedaParaReal(valor, moedaOrigem, taxaConversao) {
    if (typeof valor !== "number" || valor <= 0) {
      return "Valor inválido para conversão";
    }
  
    if (typeof taxaConversao !== "number" || taxaConversao <= 0) {
      return "Taxa de conversão inválida";
    }
  
    const valorConvertido = valor * taxaConversao;
  
    return `O valor convertido de ${moedaOrigem} para BRL é: ${valorConvertido.toFixed(2)} BRL`;
  }
  
  const taxaUSD = 5.35; 
  const taxaEUR = 6.38; 
  const taxaARS = 0.056; 
  
  const valorConvertidoUSD = converteMoedaParaReal(100, "USD", taxaUSD);
  const valorConvertidoEUR = converteMoedaParaReal(100, "EUR", taxaEUR);
  const valorConvertidoARS = converteMoedaParaReal(100, "ARS", taxaARS);
  
  console.log(valorConvertidoUSD);
  console.log(valorConvertidoEUR);
  console.log(valorConvertidoARS);
  