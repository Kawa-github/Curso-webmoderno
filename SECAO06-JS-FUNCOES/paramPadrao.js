// estrategia 1 para gerar valor padrão
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(1,2,3))
console.log(soma1(0,0,0)) //valor padrao do ||


//estrategia 2, 3 e 4 para gerar valor padrão

function soma2(a, b, c){

    a = a != undefined ? a : 1 //ternario
    b = 1 in arguments ? b: 1
    c = isNaN(c) ? 1 : c // se for numero ele pega o valor padrão = 1, se nao pega o valor de c passado pelo user
    return a + b + c
}
console.log("")
console.log(soma2())
console.log(soma2(3))
console.log(soma2(1,2,3))
console.log(soma2(0,0,0))

// valor padrao es2015
function soma3 (a = 1, b = 1, c = 1){
    return a + b + c
}
console.log("")
console.log(soma3())
console.log(soma3(3))
console.log(soma3(2,4,1))
console.log(soma3(0,0,0))

// let mult = (a,b) =>{
    
// }