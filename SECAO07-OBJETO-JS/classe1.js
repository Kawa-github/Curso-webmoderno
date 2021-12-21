class Lancamento {
    constructor (nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes,ano){
        this.mes = mes
        this.nome = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){ //quando é necessario passar numero inderteminado de parametros //transforma lancamentos em um array
        lancamentos.forEach(l => this.lancamentos.push[l])
    }

    sumario (){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
} 

const salario = new Lancamento('Salário', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6,2018)
contas.addLancamentos()