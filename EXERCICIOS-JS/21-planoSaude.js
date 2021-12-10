function calcPlano (idade,valorPlano = 100){
    if(idade < 10){
        console.log('Valor a ser pago é: ',valorPlano - 20)
    }
    else if(idade >=10 && idade < 30){
        console.log('Valor a ser pago é: ', valorPlano + 30)
    }
    else if ( idade >= 30 && idade < 60){
        console.log('Valor a ser pago é: ', valorPlano + 95)
    }
    else if(idade > 60){
        console.log('Valor a ser pago é: ', valorPlano + 130)
    }
}

calcPlano(54)
calcPlano(9)
 