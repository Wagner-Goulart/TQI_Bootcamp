function comparar(num1 , num2){
    
    const saoIguais = num1 === num2
    const soma = num1 + num2
    
    let negacao = "são"
   
    if (!saoIguais){
        negacao = "não são"

    } 
        let compara10 = "menor";
        let compara20 = "menor";

        if (soma > 10){
           compara10 = "maior";

        }
        if (soma > 20){
            compara20 = "maior";
        }
        console.log (`Os numeros ${num1} e ${num2} ${negacao} iguais. Sua soma é ${soma} que é ${compara10} que 10 e ${compara20} que 20`)
}

comparar(1, 1)
