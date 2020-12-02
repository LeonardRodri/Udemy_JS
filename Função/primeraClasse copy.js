function area(largura, alturo){
    const area = largura * alturo
    if(area > 20){
        console.log(`Paramentos acima do permitido ${area}m2.`)
    }else{
        return area
    }
}


console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(5,2,6))
console.log(area(5, 5))