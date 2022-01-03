function fatorial (numero){
    let conta = numero
    for(let i = numero - 1; i > 0; i--){
        conta = conta * i 
    } 
    console.log('resultado é: ', conta)
    return conta
}

console.log(fatorial(5))    
console.log(fatorial(3))