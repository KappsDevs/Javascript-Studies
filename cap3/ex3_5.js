

function calcularRaiz()
{
    var numero = document.getElementById("inNumero").value;
    

    if(numero == "" || isNaN(numero))
    {
        alert("Digite o numero");
        document.getElementById("inNumero").focus();
        return;
    }

    numero = Number(numero);
    
    var raiz = Math.sqrt(numero);

    if( raiz = Math.floor(raiz))
    {
        document.getElementById("resultado").textContent = raiz;
    }

    else
    {
        document.getElementById("resultado").textContent = "Não há raiz exata para " + numero;
    }

}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularRaiz);