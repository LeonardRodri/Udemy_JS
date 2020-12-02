const notas = [7.7, 7, 8, 9, 10, 8, 10, 5, 7, 5]

let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com calback
notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7

const notasBaixas3 = notas.filter(notasMenorQue7)

console.log(notasBaixas3)