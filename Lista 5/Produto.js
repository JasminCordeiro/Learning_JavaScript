// Definição da classe Produto
class Produto {
    constructor(codigo, nome, preco, quantidadeEmEstoque) {
      this.codigo = codigo;
      this.nome = nome;
      this.preco = preco;
      this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
  
    exibirDadosProdutos() {
      console.log(`Código: ${this.codigo}, Nome: ${this.nome}, Preço: ${this.preco}, Quantidade em Estoque: ${this.quantidadeEmEstoque}`);
    }
  }
  
  // Definição da classe CarrinhoDeCompras
  class CarrinhoDeCompras {
    constructor() {
      this.carrinhoDeCompras = [];
    }
  
    adicionarProdutoNoCarrinho(produto) {
      if (produto instanceof Produto) {
        this.carrinhoDeCompras.push(produto);
        console.log(`${produto.nome} foi adicionado ao carrinho.`);
      } else {
        console.error('Erro: O parâmetro deve ser uma instância da classe Produto.');
      }
    }
  
    comprarProduto(nome, quantidade) {
      const produtoNoCarrinho = this.carrinhoDeCompras.find(produto => produto.nome === nome);
  
      if (produtoNoCarrinho && produtoNoCarrinho.quantidadeEmEstoque >= quantidade) {
        produtoNoCarrinho.quantidadeEmEstoque -= quantidade;
        const precoTotal = produtoNoCarrinho.preco * quantidade;
        console.log(`Compra realizada! Total: ${precoTotal}`);
        return precoTotal;
      } else {
        console.error('Erro: Produto não encontrado no carrinho ou quantidade insuficiente em estoque.');
        return 0;
      }
    }
  
    pesquisarProdutoNoCarrinho(nome) {
      const produtoNoCarrinho = this.carrinhoDeCompras.find(produto => produto.nome === nome);
  
      if (produtoNoCarrinho) {
        produtoNoCarrinho.exibirDadosProdutos();
      } else {
        console.error('Produto não encontrado no carrinho.');
      }
    }
  
    exibirProdutosNoCarrinhoDeCompras() {
      console.log('Produtos no Carrinho:');
      this.carrinhoDeCompras.forEach(produto => produto.exibirDadosProdutos());
    }
  
    excluirProdutoDoCarrinhoDeCompras(nome) {
      this.carrinhoDeCompras = this.carrinhoDeCompras.filter(produto => produto.nome !== nome);
      console.log(`${nome} foi removido do carrinho.`);
    }
  
    exibirQuantidadeDeProdutosNoCarrinho() {
      const quantidadeTotal = this.carrinhoDeCompras.reduce((total, produto) => total + 1, 0);
      console.log(`Quantidade total de produtos no carrinho: ${quantidadeTotal}`);
    }
  
    calcularTotalDoCarrinho() {
      const total = this.carrinhoDeCompras.reduce((total, produto) => total + (produto.preco * (produto.quantidadeEmEstoque + 1)), 0);
      console.log(`Total do carrinho: ${total}`);
      return total;
    }
  }
  
  // Exemplo de uso
  const produto1 = new Produto(1, 'Tenis', 299.9, 10);
  const produto2 = new Produto(2, 'Camisa', 39.99, 5);
  
  const carrinho = new CarrinhoDeCompras();
  
  carrinho.adicionarProdutoNoCarrinho(produto1);
  carrinho.adicionarProdutoNoCarrinho(produto2);
  
  carrinho.exibirProdutosNoCarrinhoDeCompras();
  
  carrinho.comprarProduto('Camisa', 3);
  carrinho.exibirQuantidadeDeProdutosNoCarrinho();
  carrinho.calcularTotalDoCarrinho();
  
  carrinho.pesquisarProdutoNoCarrinho('Tenis');
  
  carrinho.excluirProdutoDoCarrinhoDeCompras('Camisa');
  
  carrinho.exibirProdutosNoCarrinhoDeCompras();
  