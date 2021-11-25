let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)  

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)


let compararComThisArrow = param => console.log(this == param)
compararComThisArrow(global)
compararComThisArrow(this) 