Number.prototype.entre = function (inicio, fim){
    return this >= inicio &&  this <= fim
}


const imprimirRsultado = function (nota){
    if(nota.entre(9, 10)){
        console.log('Quadro de Honra')
    }else if(nota.entre(7, 899)){
        console.log('Aprovado')
    }else{
        console.log('Voce foi reprovado')
    }
}


imprimirRsultado(5)