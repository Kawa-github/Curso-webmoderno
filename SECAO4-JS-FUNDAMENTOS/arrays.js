const valores = [7.7, 8.9 , 6.3 , 9.2]
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)
console.log(valores.length) //length: para acessar a quantidade de elementos dentro de um Array

valores.push({id:3}, false, null, 'teste') //função de Array para adicionar novos elementos
console.log(valores)


console.log(valores.pop()) //remover o ultimo valor do array
delete valores[0] //remove o valor desejado de um Array
console.log(valores)

console.log(typeof valores)