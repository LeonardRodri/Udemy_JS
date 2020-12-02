let dobro = function (a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * 4 // Returno implicito 
console.log(dobro(Math.PI))


let ola = function(){
    return 'ola'
}

ola = () => 'Oláaa'
ola = _ => 'Oláaa'

console.log(ola())