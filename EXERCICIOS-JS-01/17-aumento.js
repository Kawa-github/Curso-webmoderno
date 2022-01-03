function calcFuncionario(plano,salarioAtual){
    switch(plano){
        case 'A': 
        return salarioAtual * 1.1
        case 'B': 
        return salarioAtual * 1.15
        case 'C': 
        return salarioAtual * 1.2
        default: return 'Plano inválido!'
    }
}
console.log(calcFuncionario('A',1250))
console.log(calcFuncionario('B',1000))
console.log(calcFuncionario('C',2048))
console.log(calcFuncionario('ERRO',1111))

// console.log(calcFuncionario('B',no))
