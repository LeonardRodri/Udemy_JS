function tratarErro(erro){
    //throw new Error('...tratar')
    throw {
        nome: erro.nome,
        msg: erro.msg,
    }
}

function imprimirNome(obj){
    try{
        console.log(obj.name.toUpperCase() + "!!!!")
    }catch(e){
        tratarErro(e)
    } finally{
        console.log('Final')
    }
    
}

const obj = {nome: "Leonardo"}
imprimirNome(obj)