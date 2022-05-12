function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if(inclusivo) return numero >= minimo && numero <= maximo
    return numero > minimo && numero < maximo
    }
    
    estaEntre(10, 100, 50)//true minimo:10 numero:50 maximo: 100
    estaEntre(16, 100, 160)//false 
