const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    },{
        
        nome:'Roberto',
        nota: 7.3
    }]
}] 

const getNotaDoAluno = (aluno) => aluno.nota // pega nota dos alunos
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno) // pega nota das turmas junto a do aluno

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)


const notas2 = escola.flatMap(getNotasDaTurma) //cria um novo array concatenado
console.log(notas2)

