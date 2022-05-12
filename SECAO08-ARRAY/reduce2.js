const aluno = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: true},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

//Desafio 1: Todos são bolsistas?
const todosBolsistas = (resultado,bolsista) => resultado && bolsista
console.log(aluno.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 2: Tem algum bolsista?
const algumBolsista = (resultado,bolsista) => resultado || bolsista
console.log(aluno.map(a => a.bolsista).reduce(algumBolsista)) 