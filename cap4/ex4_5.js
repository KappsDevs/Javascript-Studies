

//Variáveis globais declaradas(contadores)

var numContas = 0;
var valTotal = 0;

var resposta = "";



function mostrarConta()
{
    var valor = Number(document.getElementById("inValor").value);
    var descricao = document.getElementById("inDescricao").value;


    if(valor == "" || descricao == "" || isNaN(valor))
    {
        alert("Digite corretamente");
        document.getElementById("inDescricao").focus();
        return;
    }

    numContas++;
    valTotal = valTotal + valor;
    
    resposta = resposta + descricao + "- R$ " + valor.toFixed(2) + "\n";
    
    
    document.getElementById("resultado").textContent = resposta;
    document.getElementById("total").textContent = numContas + " Contas total R$: " + valTotal.toFixed(2);
    
    descricao = "";
    valor = "";
    document.getElementById("inDescricao").focus();

}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", mostrarConta);