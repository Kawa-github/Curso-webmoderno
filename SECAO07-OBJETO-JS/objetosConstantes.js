// pessoa -> 123 -> {...}
const Pessoa ={
    nome:'Joao'
}
Pessoa.nome = 'Pedro'
console.log(Pessoa) //pedro


// pessoa -> 456 -> {..}
//pessoa = {nome: 'Ana'}

// nao é possivel alterar, editar 
Object.freeze(Pessoa) //congela o valor do objeto, ao último que foi passado. no caso 'Pedro'

Pessoa.nome = 'Maria'
Pessoa.endereco = 'Rua couve'
console.log(Pessoa.nome)


const pessoaConstante = Object.freeze({nome: 'Pedrinho'})
pessoaConstante.nome = 'Joazinho'
console.log(pessoaConstante)   
console.log(pessoaConstante.nome)    