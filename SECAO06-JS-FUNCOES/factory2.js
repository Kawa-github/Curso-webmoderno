
function criarProduto(nome,preco){
    return{ //retorna o objeto
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Notebook",4000))
console.log(criarProduto("Iphone",3299.99))

const createProduct = (nome, preco, desconto = 0.1) => { //com arroz function
    return{
       nome, 
       preco
   }  
}
console.log(createProduct('drone',5878))