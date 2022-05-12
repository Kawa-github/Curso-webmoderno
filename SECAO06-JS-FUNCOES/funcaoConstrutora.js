function Carro(velocidadeMaxima = 200, delta = 5){
    let velocidadeAtual = 0 // atributo privado
    
    // metodo público
    this.acelerar = function (){

        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }
        else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function (){ //this para conseguir um valor de atributo/variavel privado
        return velocidadeAtual  
    }
}


const uno = new Carro 
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350,20) //carro - function
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)