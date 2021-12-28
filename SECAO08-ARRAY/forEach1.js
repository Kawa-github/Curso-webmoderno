const aprovados = ['Agatha','Aldo','Daniel','Raquel']

//for each percorre cada elemento do array
aprovados.forEach(function(nome,indice,array){ //callback - recebe tres parametros, nome,indice e array
    console.log(`${indice + 1} ${nome}`)
    // console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)