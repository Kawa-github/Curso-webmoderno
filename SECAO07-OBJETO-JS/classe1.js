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

    sumario() {
        let valorConsolidado = 0 // inicializa valorConsolidado com 0
        this.lancamentos.forEach(l => { // percorre o array de lançamentos
          valorConsolidado += l.valor // soma o valor do lançamento com o valorConsolidado
        })
        return valorConsolidado
      }
} 

const salario = new Lancamento('Salário', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6,2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())