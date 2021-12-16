// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'KAWA' //nao existe nem no obj pai e avo, sendo assim retorna undefined //nao faça
const avo = { //prototipo do pai é object.protype
    attr1: 'A'
}

const pai = {
    __proto__: avo, //referenciando que o obj pai tem como prototipo/pai o obj 'avo'
    attr2: 'B'
}

const filho = {
    __proto__: pai, //prototipo pai
    attr3: 'C'
}

console.log(filho.attrA) //nao existe nem no obj pai e avo, sendo assim retorna undefined
console.log(filho.attr0) // prototipo do object.protype - que fica acima do obj "mais forte", no caso avo
console.log(filho.attr1) 
console.log(filho.attr2)
console.log(filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
            if(this.velAtual + delta <= this.velMax){
                this.velAtual += delta
            }else{
                this.velAtual = this.velMax
            }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing - sombreamento 
}

const volvo = {
    modelo: 'V40',
    status(){
         return `${this.modelo}: ${super.status()}`
    }
}
 
Object.setPrototypeOf(ferrari,carro) //obj, prototipo
Object.setPrototypeOf(volvo, carro)
 
console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())