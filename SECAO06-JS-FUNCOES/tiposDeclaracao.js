console.log(soma(3,4))
//console.log(sub(5,1)) erro
// console.log(mult(2,3)) erro

// function declaration
function soma(a,b){
    return a + b
}

// function expression
const sub = function (x,y){ // função anonima
    return x - y
}

console.log(sub(5,1))
// named
const mult = function mult(x,y){
    return x * y
}

console.log(mult(2,3))