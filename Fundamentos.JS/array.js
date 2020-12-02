function somar(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}


const somarAB = somar(3)(4)
console.log(somarAB(5))