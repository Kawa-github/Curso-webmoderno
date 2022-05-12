const aluno = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: true},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(aluno.map(a => a.nota))
const resultado = aluno.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
}, 0) //valor inicial - obrigatório

console.log(resultado)