

//Variáveis globais declaradas(contadores)






function mostrarConta()
{
    var valor = Number(document.getElementById("inNumero").value);
    var numDivisores = 0;


    if(valor == "" || isNaN(valor))
    {
        alert("Digite corretamente");
        document.getElementById("inDescricao").focus();
        return;
    }

    
    
    for( var i = 0; i <= (valor / 2); i++) // otimizar o programa, o maior divisor (inteiro) de um número é sua metade
    {
        if( valor % i == 0)
        {
            numDivisores++;
        }
    }
    
    if (numDivisores == 2)
    {
        document.getElementById("resultado").textContent = valor + " É primo";

    }

    else
    {
        document.getElementById("resultado").textContent = valor + " Não é primo";
    }
    
  /* Alternativa para melhorar e acelerar desempenho usando uma variável do "tipo" flag
        var temDivisor = 0;
         
        for (var i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                temDivisor = 1;
                break; 
            }
        }
        if (num > 1 && !temDivisor) 
        {
            outResposta.textContent = num + " É primo";
        } 
        else 
        {
            outResposta.textContent = num + " Não é primo";
        }
  */

}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", mostrarConta);