/*
const somar = (...numero) => {
    let total = 0
    for(let n of numero){
        total += n
    }
    return total
}

console.log(somar(1,2,3,4,5,6,7,8,9,10))
console.log(somar(5,6,7,8,9,10))
console.log(somar(7,8,9,10))
*/


/*
const potencia = (base) => {
    return function(exp){
        return Math.pow(base, exp)
    }
}
console.log(potencia(5)(2))
*/

// this
Array.prototype.ultimo = function() {
    console.log(this[this.length -1])
}
const numero = [1, 2, 3]
numero.ultimo()
