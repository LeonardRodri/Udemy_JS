class Lancamento{
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
    
}

class ClicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }
    addLancaemnto(...lancamento){
        lancamento,forEach(l => this.lancamento.push(l))
    }
}