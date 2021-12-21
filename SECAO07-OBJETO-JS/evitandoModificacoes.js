// Object.preventExtensions
const produto = Object.preventExtensions({ //pode editar atributos, deletar, porém n é possivel adicionar
    nome: 'Qualquer', 
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensiveis: ', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'Borracha Faber Castell'
delete produto.tag
console.log(produto)



//Object.seal selado
const pessoa = {nome: 'Juliana', idade: 35} //só é possivel alterar valor
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Ribeiro'
pessoa.idade = 25
delete pessoa.nome
console.log(pessoa)


// Object.freeze = selado + valores constantes, pode fazer nada!
