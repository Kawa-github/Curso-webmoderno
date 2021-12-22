console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana'] //melhor forma de declarar um Array
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //undefined

aprovados[3] = 'Paulin' //add indice a um array
aprovados.push('Raffa')
console.log(aprovados.length)
console.log(aprovados)


aprovados[9] = 'Joaquim'
console.log(aprovados[8] === undefined)
console.log(aprovados.length)
console.log(aprovados)


aprovados.sort()
console.log(aprovados)

delete aprovados[1] //excluir indice
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos','Ana']
aprovados.splice(1,1) //indice, posicao/altura do indice //splice add e remover 
console.log(aprovados)