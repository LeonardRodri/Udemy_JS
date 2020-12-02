const soma = function(x, y){
    return x + y
}

const imprimirRessultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirRessultado(3, 4)

imprimirRessultado(3, 4, soma)

imprimirRessultado(3, 4, function (x, y){ 
    return x - y
})

imprimirRessultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function (){
        console.log('Opa')
    }
}

pessoa.falar()