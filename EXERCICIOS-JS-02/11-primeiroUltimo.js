function receberPrimeiroEUltimoElemento(elementos) {
    const indiceDoPrimeiroElemento = 0
    
    const indiceDoUltimoElemento = elementos.length - 1
    
    const primeiroElemento = elementos[indiceDoPrimeiroElemento]
    
    console.log( elementos[indiceDoPrimeiroElemento])
    
    console.log( elementos[indiceDoUltimoElemento])    
    
    const ultimoElemento = elementos[indiceDoUltimoElemento]
    
    return [primeiroElemento, ultimoElemento]
}

    receberPrimeiroEUltimoElemento([7,14,"olá"]) 
    receberPrimeiroEUltimoElemento(["Kawã",123,777])     