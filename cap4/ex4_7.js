



function mostrarConta()
{
    var valor = Number(document.getElementById("inNumero").value);
    var fruta = document.getElementById("inFruta").value;

    if(valor == "" || fruta == "" || isNaN(valor))
    {
        alert("Digite corretamente");
        document.getElementById("inFruta").focus();
        return;
    }

    var resposta = "";
    
    
    for( var i = 0; i < valor; i++) 
    {
        resposta = resposta + fruta + "*";
    }
    
  document.getElementById("resultado").textContent = resposta;
        


}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", mostrarConta);