function realizarConta (n1,op,n2){
    
    switch(op){
        case '+': return n1 + n2
        case '*': return n1 * n2
        case '-': return n1 - n2
        case '/': return n1 / n2 
        default: return 'Operação inválida'
    }
}

console.log(realizarConta(5,'+',10))
console.log(realizarConta(5,'*',3))
console.log(realizarConta(7,'-',3))
console.log(realizarConta(10,'/',5))
console.log(realizarConta(5,'#',10))
console.log(realizarConta(2, '/', 55))

