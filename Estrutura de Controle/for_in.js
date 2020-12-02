const notas = [6.7, 7, 8, 9, 10, 11]

for (i in notas){
    console.log(i,notas[i])
}

const pessoa = {
    nome: "Leonardo",
    sobrenome: "Rodrigues",
    idade: 29,
    peso: 50
}

for (atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}