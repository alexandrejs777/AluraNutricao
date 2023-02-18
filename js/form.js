// Obtém ação sobre o botão adicionar
var botaoAdicionar = document.querySelector('#adicionar-paciente');

// Cria e executa o evento de adicionar um novo paciente
botaoAdicionar.addEventListener('click', function () {
    event.preventDefault();
    
    // Obtém ação sobre o formulário
    var formulario = document.querySelector('#form-adiciona');

    // Obtém os dados do paciente do formulário
    var paciente = obtemPacienteDoFormulario(formulario);
    //console.log(paciente);

    // Cria uma nova linha na tabela com os dados do formulário do paciente
    var pacienteTr = montaTr(paciente);

    if (!validaPaciente(paciente)){
        console.log("Paciente inválido!");
        return;
    }

    // Colocar os elementos de tabela dentro da TB
    var tabela = document.querySelector('#tabela-pacientes');
    
    // Insere a nova linha dentro da tabela
    tabela.appendChild(pacienteTr);

    formulario.reset();
});

function obtemPacienteDoFormulario(formulario){
    
    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaImc(formulario.peso.value, formulario.altura.value)
    }
     
    return paciente;
}

function montaTr(paciente){
    
    // Cria a linha (tr)
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    // Insere as células criadas dentro da linha, já com os dados do paciente e criando as classes
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function montaTd(dado, classe){
    // Cria as células (td), insere o dado do paciente e adiciona também a classe neste elemento criado
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    if (validaPeso(paciente.peso)){
        return true;
    } else {
        return false;
    }
}