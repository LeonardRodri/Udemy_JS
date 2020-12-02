function triangulo(l1, l2, l3) {
    if(l1 == l2 && l1 == l3 && l2 == l3){
        return console.log("Equilátero")

    }else if( l1 == l2 || l1 == l3 || l2 == l3){
        return console.log("Isósceles")
    }else{
        return console.log('Escaleno')
    }
}

triangulo(2,3,1)