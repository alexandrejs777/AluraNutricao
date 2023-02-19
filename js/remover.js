/*
var pacientes =  document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente){
    paciente.addEventListener('dblclick', function(){
        console.log("Fui clicado com duplo click!");
        this.remove();
    })
})
*/

var tabela = document.querySelector('table');

tabela.addEventListener('dblclick', function(event){
    /*
    var alvoDoEvento = event.target;
    var paiDoAlvo = alvoDoEvento.parentNode;
    paiDoAlvo.remove();
    */
   event.target.parentNode.remove(); // A mesma função acima, porém mais simples.
})