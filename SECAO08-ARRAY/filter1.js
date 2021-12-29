const produto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]  

console.log(produto.filter(function(e){ //filter retorna um valor booleano. true ou false
    return false
}))

const prodFragil = prod => prod.fragil = true
const prodPreco = produto => produto.preco >= 500

console.log(produto.filter(prodFragil).filter(prodPreco))