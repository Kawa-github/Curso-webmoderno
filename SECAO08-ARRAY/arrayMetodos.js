const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //add elemento
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //add o elemento ao primeiro indice do array [0]
console.log(pilotos)


//splice pode adicionar e remover elementos de um array
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)
console.log(pilotos[3])


//remover 
pilotos.splice(3,1) //indice //quantidade
console.log(pilotos)

const AlgunsPilotos1 = pilotos.slice(2) // gera um novo array a partir do indice desejado
console.log(AlgunsPilotos1)

const AlgunsPilotos2 = pilotos.slice(1,4) //gera um novo array a partir do intervalo de indices 1 2 3

