const notas = [7.7, 6.5, 5.2, 8.9]

// Sem callback
let notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas4.push(notas[i]) // push para adicionar elemento a um array
    }    
}

console.log(notasBaixas1)

// Com callback
notasBaixas2 = notas.filter(function (nota){
    return nota < 7 // retorna true ou false
})

console.log(notasBaixas2)


const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)