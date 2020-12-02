const produto = new Object
produto.nome = 'CADEIRA'
produto['Marca do produto'] = 'Generica'
produto.preco = 200

console.log(produto)

delete produto.preco

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Leonardo',
        idade: 56,
        endereco:{
            logradouro: 'Rua abcd',
            numero: 10
        }
    },
    condutores:[{
        nome: 'Junior',
        idade: 189
        },{
        nome: 'Junior',
        idade: 189
        },{
        nome: 'Junior',
        idade: 189 
      }],
      calcularValorSeguro: function(){
          // ...
      }

}

carro.proprietario.endereco.numero = 1000

console.log(carro)
console.log(carro.condutores)