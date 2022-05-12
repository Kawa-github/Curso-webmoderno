Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){ //percorre o array do começo ao fim
        if(callback( this[i], i , this )) //posicao, indice, array
        {
            newArray.push(this[i])
        }   
    }
    return newArray
    
}
const produto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]  



const prodFragil = prod => prod.fragil = true
const prodPreco = produto => produto.preco >= 500

console.log(produto.filter2(prodFragil).filter2(prodPreco))