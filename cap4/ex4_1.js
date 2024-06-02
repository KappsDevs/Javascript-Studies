

function mostrarTabuada()
{
    var numero = document.getElementById("inNumero").value;
    
    numero = Number(numero);

    if(numero == "" || isNaN(numero))
    {
        alert("Digite o numero");
        document.getElementById("inNumero").focus();
        return;
    }

    var resposta = "";
    
    
    for (i = 1; i <= 10; i++)
    {
        resposta = resposta + numero + " x " + i + " = " + numero * i  + "\n";
    }

    
    document.getElementById("resultado").textContent = resposta;
  

}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", mostrarTabuada);