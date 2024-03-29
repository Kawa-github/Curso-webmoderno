// usando de forma literal
const obj1 = {
    
}
console.log(obj1)

//Object em JS

console.log(typeof Object, typeof new Object)
const obj2 = new Object // objeto criado a partir da função construtora
console.log(obj2)

//Funções construtoras
function Produto (nome,preco,desconto){
    this.nome = nome //tornando visivel para todos
    this.getPrecoComDesconto = () => { //metodo publico       
        return preco * (1 - desconto)
    }
}


const prod1 = new Produto('Caneta', 7.99, 0.15)
const prod2 = new Produto('Notebook', 2998.99, 0.25)
console.log(prod1.getPrecoComDesconto(), prod2.getPrecoComDesconto())

// Função factory
function criarFuncionario(nome,salarioBase,faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)

        }
    }

}

const f1 = criarFuncionario('João',7900,4)
const f2 = criarFuncionario('Maria',11400,1)
const f3 = criarFuncionario('Rafael',1000,10)
console.log(f1.getSalario(), f2.getSalario(), f3.getSalario())


//Object.create 
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)