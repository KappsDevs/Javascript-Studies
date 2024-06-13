var criancas =[];

var criancas = [];


function adicionarCrianca(){
    var nome = document.getElementById("inNome").value;
    var idade = Number(document.getElementById("inIdade").value);

    if(nome === "" || idade === 0 || isNaN(idade)){
        alert("Digite corretamente");
        document.getElementById("inNome").focus();
        return;
    }

    criancas.push({nome: nome, idade: idade});

    // Limpar campos de entrada
    document.getElementById("inNome").value = "";
    document.getElementById("inIdade").value = "";

    document.getElementById("inNome").focus();
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCrianca);

function listarTodos(){
    if(criancas.length === 0){
        alert("Não há crianças");
        return;
    }

    var lista = "";

    for(var i = 0; i < criancas.length; i++) {
        lista += criancas[i].nome + " - " + criancas[i].idade + "\n";
    }

    document.getElementById("outLista").textContent = lista;
}

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarTodos);


function resumirPorIdade() {
    if (criancas.length === 0) {
        alert("Não há crianças");
        return;
    }

    var copia = criancas.slice();
    var lista = "";
    copia.sort(function(a, b) {
        return a.idade - b.idade;
    });

    for (var i = 0; i < copia.length; i++) {
        lista += copia[i].nome + " - " + copia[i].idade + "\n";
    }

    var outLista = document.getElementById("outLista");

    outLista.textContent = lista;
}

var btResumir = document.getElementById("btResumir");
btResumir.addEventListener("click", resumirPorIdade);
