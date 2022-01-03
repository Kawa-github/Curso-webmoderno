const alunos = [
    {nome: 'Joao' , nota: 7.9 ,idade: 12},
    {nome: 'Maria', nota: 9.2 , idade: 17},
    // {nome: 'Kawa', nota: 5.5, idade: 16}
]

//Imperativo
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 = total1 + alunos[i].nota
    // console.log(alunos[i].idade)
}

console.log(total1 / alunos.length)
  


//Declarativo
const getNota = aluno => aluno.nota
const soma = (total,atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)