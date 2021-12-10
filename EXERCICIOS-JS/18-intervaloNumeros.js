function intervaloNumeros (numero){
    switch(numero){
        case 1: return 'Número um'
        case 2: return 'Número dois'
        case 3: return 'Número tres'
        case 4: return 'Número quatro'
        case 5: return 'Número cinco'
        case 6: return 'Número seis'
        case 7: return 'Número sete'
        case 8: return 'Número oito'
        case 9: return 'Número nove'
        case 10: return 'Número dez'
        default: return 'número fora de intervalo!' 
    }
}

console.log(intervaloNumeros(2))
console.log(intervaloNumeros(5))
console.log(intervaloNumeros(8))
console.log(intervaloNumeros(1))
console.log(intervaloNumeros(10))
console.log(intervaloNumeros(11))