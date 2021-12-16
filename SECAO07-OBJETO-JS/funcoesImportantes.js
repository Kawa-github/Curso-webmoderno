const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
}) 

Object.defineProperty(pessoa , 'dataNascimento', {
    enumerable: true, // permitido listar junto ao obj
    writable: false, //alterar
    value: '01/01/2021'
})

pessoa.dataNascimento = '30/12/2003'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


//Object. assign (ES2015)
const destino = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(destino,o1,o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)