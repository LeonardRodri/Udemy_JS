 function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c 
        }
        
    }
    
}

const somarABC = somar (1)(1)(1)
console.log(somarABC)
console.log("Primeira execução somente soma! ")
console.log("\n ****** \n")

/*Fim da primeira execução */


/*Função para acionar os numeros*/
function calculular(x) {
    return function (y) {
        return function(fn) {
            return fn(x, y)            
        }
        
    }
    
}
/*Função para subitrair*/
function sub(a, b) {
    return a - b;
}
/*Função para somar*/
function adc(a, b) {
    return a + b
}
/*Função para multiplicar*/
function multiplica(a, b) {
    return a * b
}

/* Chamando as funcões para executar passando os paramentos*/
const r1 = calculular(1)(1)(sub)
const r2 = calculular(1)(1)(adc)
const r3 = calculular(1)(1)(multiplica)

console.log(r1)
console.log(r2)
console.log(r3)