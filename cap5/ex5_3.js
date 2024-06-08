var carros =[];


function adicionarCarro(){
    var modelo = document.getElementById("inModelo").value;
    var preco = Number(document.getElementById("inPreco").value);

    if(modelo == "" || preco == 0 || isNaN(preco)){
        alert("Digite correetamente");
        modelo.focus();
        return;
    }

    carros.push({modelo: modelo, preco: preco});
    modelo = "";
    preco = "";
    document.getElementById("inModelo").focus();
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCarro);


function listarCarro(){
    
    if(carros.length == 0){
        alert("Não há carros");
        return;
    }

    var lista = "";

    for(var i = 0; i <= carros.length; i++)
    {
        lista = lista + carros[i].modelo + carros[i].preco.toFixed(2); + "\n";
    }

    document.getElementById("outLista"). textContent = lista;
}

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCarro);

function filtrarCarro(){
    var maximo = Number(prompt("Qual o valor máixmo?"));

    if(maximo == 0 || isNaN(maximo)){
        return;
    }

    var lista = "";

    for(var i = 0; i < carros.length; i++){
        
        if(carros[i].preco <= maximo){
            lista = lista + carros[i].modelo + carros[i].preco.toFixed(2) + "\n";
        }
    }

    var outLista = document.getElementById("outLista");

    if (lista == ""){
        outLista.textContent = "Não há carros nessa faixa"
    }
    else{
        outLista.textContent = lista
    }
}

var btFiltrar = document.getElementById("btFiltrar");
btFiltrar.addEventListener("click", filtrarCarro);