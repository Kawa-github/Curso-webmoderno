// class Pessoa {
//     constructor(nome){ //função construtora
//         this.nome = nome
//     }

//     falar (){
//         console.log(`Meu nome é ${this.nome}`)
//     }
// }

// const p1 = new Pessoa("João")
// p1.falar()


function Pessoa(nome){
    this.nome = nome

    this.dizer = function(){ // this torna o objeto referenciado global
        console.log(`O nome agora é ${nome}`)
    }
}

const p1 = new Pessoa('Kawa')
p1.dizer()