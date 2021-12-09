function compraCarro (carro){
    switch(carro){
        case 'hatch':  
        return 'Compra efetuada com sucesso'

        case 'sedan':
        case 'caminhonete':
        case 'motocicletas': return 'Tem certeza que não prefere este modelo??'

        default: return 'Não trabalhamos com este tipo de automóvel aqui!'
    }   
}


console.log('\n')
console.log(compraCarro('sedan'))   
console.log('\n')
console.log(compraCarro('hatch'))
// console.log(compraCarro('motocicletas'))