//JSON formato de dados para compartilhamento de dados entre sistemas
const obj = {
    a:1 , 
    b: 2,
    c: 3, 
    soma() {
         return a + b + c
    }
}
console.log(JSON.stringify(obj)) 

// console.log(JSON.parse("{'a': 1, 'b': 2, 'c: 3'}")) ERRO
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) //necessário aspas duplas ""
console.log(JSON.parse('{"a": 1.3, "b": "stringg", "c": true, "d": {"nome":"juca"}, "e": ["idade,15"] }'))

