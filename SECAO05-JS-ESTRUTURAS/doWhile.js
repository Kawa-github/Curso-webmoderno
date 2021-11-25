function getInteiroAleatorioEntre(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao // com o do/while é somente iniciada a variável, sem valor inicial
// let opcao = -1 
// let opcao //nao é necessario atribuir um valor para opcao. Fazendo isso, garante que a estrutura vá rodar pelo menos uma vez.

do{
    opcao = getInteiroAleatorioEntre(-1, 10)   
    console.log(`Opção escolhida foi: ${opcao}`)
}while( opcao != 0);
console.log('Até a próxima')
