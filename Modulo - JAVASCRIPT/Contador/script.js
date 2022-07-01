const contador = document.getElementById("numeroAtual")


document.querySelector(".incrementar").addEventListener("click", incrementar)
function incrementar (){
    let numero = parseInt(contador.textContent) + 1;
    contador.textContent = numero
    contador.style.color = "Green"
        
    

}

document.querySelector(".decrementar").addEventListener("click", decrementar)
function decrementar (){
    let numero = parseInt(contador.textContent) - 1;
    contador.textContent = numero
    if (contador.textContent < 0 ){
        contador.style.color = "red"
    }

    
}


    
