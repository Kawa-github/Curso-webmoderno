function calcFruta (fruta){
    switch (fruta){
        case 'Maçã': return 'Não vendemos esta fruta aqui'
        case 'Kiwi': return 'Estamos com excassez de Kiwi'
        case 'Melancia': return 'Aqui está, são 3 reais o quilo'

        default: return 'Fruta inválida!!!'
    }
}

console.log(calcFruta('Kiwi'))
console.log(calcFruta('Maçã'))
console.log(calcFruta('Melancia'))
console.log(calcFruta('Pera'))
