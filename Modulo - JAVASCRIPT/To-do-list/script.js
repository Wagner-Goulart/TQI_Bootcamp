// ADICIONANDO TAREFAS
function add(){
   const tarefa = document.querySelector(".input")
      if (tarefa.value == ""){
         alert("Digite uma tarefa")
   }  
   else{
            const li = document.createElement("li")
            const input = document.createElement("input")
            input.type = "checkbox"
            const label = document.createElement("label")
           
            
            
            
            document.querySelector(".listaTarefas").appendChild(li)
            li.appendChild(input)
            li.appendChild(label)
           
            label.innerText = tarefa.value
            
            
            limparTexto()

   
}
}
// LIMPANDO LISTA DE TAREFAS
function limpar (){
   const limpar = document.querySelector(".listaTarefas")

   limpar.innerHTML = ""
}

// LIMPANDO TEXT0
function limparTexto(){
   const texto = document.querySelector(".input")
   texto.value = ""
}


      
         // ADICIONANDO LISTENER NA TECLA ENTER, PARA INCLUSÃO DA TAREFA
         document.addEventListener("keydown", teclado)
         function teclado (e) {
            if (e.keyCode == 13){
               document.querySelector(".input")
               add()

            }

            }
         
 


