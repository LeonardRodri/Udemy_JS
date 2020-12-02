const saudacao = 'opa' // contexto léxico

function exec(){
    const saudacao = 'Fala' // contexto léxico 2
    return saudacao 
}

// Obejtos são grupos aninhados de pares nome/valor 

const cliente = {
    nome: 'Pedro',
    idade: 33,
    peso: 90,
    endereco:{
        logradouro: 'Rua escocia',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec(saudacao))
console.log(cliente)