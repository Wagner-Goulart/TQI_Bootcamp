
function calculadora() {
const OPERACAO = Number(prompt("Digite a operação a ser realiza \n 1 Soma (+) \n 2 subtração (-) \n 3 Multiplicação (*) \n 4 Divisão real (/) \n 5 resto da divisão (%) \n 6 pontenciação (**)"));

if (!OPERACAO || OPERACAO >= 7){
    alert("Operação inválida")
    calculadora()
} else {
const NUMERO_1 = Number(prompt("Digite o primeiro numero:"));
const NUMERO_2= Number(prompt("Digite o segundo numero:"));
    
let resultado;
if (!NUMERO_1 || !NUMERO_2){
    alert("Parametros invalidos")
    calculadora()
} else {
 function soma(){
    resultado = NUMERO_1 + NUMERO_2
    alert(`${NUMERO_1} + ${NUMERO_2} = ${resultado}`)
    novaOperacao ()
 }

 function subtracao(){
    resultado = NUMERO_1 - NUMERO_2
    alert(`${NUMERO_1} - ${NUMERO_2} = ${resultado}`)
    novaOperacao ()
 }

 function multiplicacao(){
    resultado = NUMERO_1 * NUMERO_2
    alert(`${NUMERO_1} * ${NUMERO_2} = ${resultado}`)
    novaOperacao ()
 }

 function divisaoReal(){
    resultado = NUMERO_1 / NUMERO_2
    alert(`O numero ${NUMERO_1} divido por ${NUMERO_2} = ${resultado}`)
    novaOperacao ()
 }

 function divisaoResto(){
    resultado = NUMERO_1 % NUMERO_2
    alert(`O resto da divisão de ${NUMERO_1} por ${NUMERO_2} = ${resultado}`)
    novaOperacao ()
 }

 function potencia(){
    resultado = NUMERO_1 ** NUMERO_2
    alert(`O numero ${NUMERO_1} elevado a ${NUMERO_2} = ${resultado}`)
    novaOperacao ()
 }
}
}

function novaOperacao () {
    let opcao = prompt("Deseja fazer uma nova operação? \n 1 - Sim \n 2 - Não ")

    if (opcao == 1){
        calculadora ()
    } else if (opcao == 2){
        alert("Até mais") 
        
} else {
    alert("Digite uma opção valida")
    novaOperacao ()
}
}
 if (OPERACAO == 1){
    soma()
 } else if (OPERACAO == 2){
    subtracao()
 } else if (OPERACAO == 3){
    multiplicacao()
 } else if (OPERACAO == 4){
    divisaoReal()
 } else if (OPERACAO == 5){
    divisaoResto()
 } else if (OPERACAO == 6){
    potencia()
 }

}



calculadora()