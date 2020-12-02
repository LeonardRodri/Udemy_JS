// estrategia 1 para gerar valor padrão

function somar1(a, b ,c){
    a = a || 1 
    b = b || 1 
    c = c || 1 
    return a + b + c
}

console.log(somar1(), somar1(3), somar1(1,2,3), somar1(0,0,0))

// estrategia  para gerar valor padrão
function somar2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(somar2(), somar2(1))


