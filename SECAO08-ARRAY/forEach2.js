Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i , this ) //valor atual, indíce, array passado para a função
    }
}

const aprovados = ['Agatha','Aldo','Daniel','Raquel']

//for each percorre cada elemento do array
aprovados.forEach(function(nome,indice,array){ //callback - recebe tres parametros, nome,indice e array
    console.log(`${indice + 1} ${nome}`)
    // console.log(array)
})
