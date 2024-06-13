var clubes = [];

function adicionarClube(){
    var clube = document.getElementById("inClube").value;

    if(clube == "" ){
        alert("Informe corretamente");
        return;
    }
    clubes.push(clube);
    document.getElementById("inClube").value = "";
}

var btnAdicionar = document.getElementById("btAdicionar");
btnAdicionar.addEventListener("click", adicionarClube);

function listarClubes(){
    if(clubes.length === 0 ){
        alert("Não há clubes");
        return;
    }

    var lista = "";

    for(var i = 0; i < clubes.length; i++){
        lista = lista + i + " - " + clubes[i] + "\n";
    }

    document.getElementById("outLista").textContent = lista;
}

var btnListar = document.getElementById("btListar");
btnListar.addEventListener("click", listarClubes);

function montarTabela(){
    if(clubes.length === 0 ){
        alert("Não há jogos");
        return;
    }

    var lista = "";

    for(var i = 0; i < clubes.length/2; i++){
        var j = clubes.length - 1 - i;
        lista = lista + i + " - " + clubes[i] + " X " + clubes[j] + "\n";
        
    }

    document.getElementById("outLista").textContent = lista;

}

var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", montarTabela);
