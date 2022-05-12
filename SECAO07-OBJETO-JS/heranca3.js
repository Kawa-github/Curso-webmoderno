const pai ={
    nome: 'Pedro',
    corCabelo: 'preto'
}

const filha1 = Object.create(pai) //criou o obj filha tendo como prototipo o pai
filha1.nome = 'Ana'
console.log(filha1.nome)
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { 
        value: 'Bia', 
        writable: 'false',
        enumerable: 'true' //listar
     }
})
console.log(filha2.nome)
filha2.nome = 'Carla'
// filha2.corCabelo = 'Azul'
console.log(`${filha2.nome} tem o cabelo ${filha2.corCabelo}`) //cor cabelo do prototipo do pai

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`) //recebeu o prototipo a partir da herança 
}