function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.50
    }
}

console.log(criarProduto("Notebook", 2000))
console.log(criarProduto("Ipad", 1199.49))