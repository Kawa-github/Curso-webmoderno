// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas a função
// externas de uma função
// Quando a função é criada ela tem inf
//Contexto léxico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())



// const x = 'Global';
// function fora() {
//     const x = 'Dentro';
//     return () => x;
// }
 
// console.log(fora()());