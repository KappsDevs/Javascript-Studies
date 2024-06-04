var pacientes = [];

function adicionarPaciente() {
    var nome = document.getElementById("inNome").value;

    if (nome == "") {
        alert("Digite corretamente");
        document.getElementById("inNome").focus();
        return;
    }

    pacientes.push(nome); // adiciona ao final da lista
    var lista = "";
    
    for (var i = 0; i < pacientes.length; i++) {
        lista = lista + (i + 1) + ". " + pacientes[i] + "\n";
    }
    
    document.getElementById("resultado").textContent = lista;
    document.getElementById("inNome").value = ""; // Limpa o campo de entrada
    document.getElementById("inNome").focus(); // Define o foco no campo de entrada
}

function adicionarUrgencia() {
    var nome = document.getElementById("inNome").value;

    if (nome == "") {
        alert("Digite corretamente");
        document.getElementById("inNome").focus();
        return;
    }

    pacientes.unshift(nome); // adiciona no início da lista
    var lista = "";
    
    for (var i = 0; i < pacientes.length; i++) {
        lista = lista + (i + 1) + ". " + pacientes[i] + "\n";
    }
    
    document.getElementById("resultado").textContent = lista;
    document.getElementById("inNome").value = ""; // Limpa o campo de entrada
    document.getElementById("inNome").focus(); // Define o foco no campo de entrada
}

function atenderPaciente() {
    if (pacientes.length == 0) {
        alert("Não há pacientes");
        document.getElementById("inNome").focus();
        return;
    }

    var atendimento = document.getElementById("outAtendimento");
    var outLista = document.getElementById("resultado");
    
    var atender = pacientes.shift(); // Remove o primeiro paciente da lista

    atendimento.textContent = "Atendendo: " + atender; // Exibe o paciente sendo atendido

    var lista = "";
    
    for (var i = 0; i < pacientes.length; i++) {
        lista = lista + (i + 1) + ". " + pacientes[i] + "\n"; // Adiciona o índice e o nome do paciente na lista
    }

    outLista.textContent = lista; // Atualiza a lista de pacientes
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarPaciente);

var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", adicionarUrgencia);

var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);
