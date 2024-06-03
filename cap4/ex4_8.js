



function mostrarConta()
{
    var numero = Number(document.getElementById("inNumero").value);
    var ano = Number(document.getElementById("inAno").value);

    if(numero == "" || ano == "" || isNaN(ano) || isNaN(numero)) 
    {
        alert("Digite corretamente");
        document.getElementById("inNumero ").focus();
        return;
    }

    var resposta = "";
    
    
    for( var i = 1; i <= ano; i++) 
    {
        resposta = resposta + i + "° Ano: " + numero + " Chinchilas" + "\n";
        numero = numero * 3;
    }
    
  document.getElementById("resultado").textContent = resposta;
        


}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", mostrarConta);