// Evento no botão 'Adicionar paciente'
var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', function () {
    event.preventDefault();
    
    // Capturar os dados do formulário
    var formulario = document.querySelector('#form-adiciona');

    var nome = formulario.nome.value;
    var peso = formulario.peso.value;
    var altura = formulario.altura.value;
    var gordura = formulario.gordura.value;

    // Criar as tabelas
    var pacienteTr = document.createElement('tr');

    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    // Colocar os TDs dentro do TR
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    // Colocar os elementos de tabela dentro da TB
    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);


    // Inserir os dados do formulário dentro dos elementos criados
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso, altura);
});