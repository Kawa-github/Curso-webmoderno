/**
 Instanciar é criar um objeto.
 Classe pode ser considerado um molde, você instancia um objeto a partir de uma classe, ou seja, 
 você pode criar vários objetos a partir de um molde (classe), o molde (classe) cria a estrutura básica de um objeto, mas você pode personalizar cada objeto. 

 */

// coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 200

console.log(produto)
console.log(produto.nome)
console.log(produto.preco)


//delete - excluir atributo de um objeto  
delete produto.preco 
delete produto['marca do produto']
console.log('/n')
console.log(produto)

const carro = {
    modelo: 'Audi A4',
    valor: 89000,
    proprietario: { //outro objeto com seus proprios atributos
        nome: 'João',
        idade: 56,
        endereco: {
            logradouro: 'Rua lupercio',
            numero: 123
        }
    },

    condutores: [{ //array de objetos
        nome: 'Junior',
        idade: 18 
    }, { // segundo objeto dentro do array 'condutores'
        nome: 'Ana',
        idade: 48
    }],

    calcularValorSeguro: function (){
        //........
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro //deletar função
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)