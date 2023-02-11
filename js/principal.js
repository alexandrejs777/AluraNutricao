var titulo = document.querySelector(".titulo");
titulo.textContent = "Alura Nutrição";


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
    //console.log(pacientes[i]);

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");


    var pesoEValido = true;
    var alturaEValida = true;

    if (peso <= 0 || peso >= 1000){
        //console.log("Peso inválido!");
        pesoEValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-atencao");
    }

    if (altura <= 0 || altura >= 3.00){
        //console.log("Altura inválida!");
        alturaEValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-atencao");
    }

    if (pesoEValido && alturaEValida){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

// Função nomeada
/*
titulo.addEventListener("click", mostraMenssagem);

function mostraMenssagem() {
    console.log("Olá, eu fui clicado!");
}
*/


// Função anônima
/*
titulo.addEventListener ('click', function () {
    console.log("Olha só posso chamar uma função anônima!")
})
*/

// Evento no botão 'Adicionar paciente'
var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', function () {
    console.log("Botão adicionar paciente foi clicado!")
});