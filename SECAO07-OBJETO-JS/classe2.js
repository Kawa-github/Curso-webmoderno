class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { //extends é a forma para definir que uma classe tem determinado prototipo. Neste caso pai é prototipo de avo~
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome) //chamando sobrenome da superClasse - Avo
        this.profissao = profissao 
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)