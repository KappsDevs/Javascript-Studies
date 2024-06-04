var erros = [];
var sorteado = Math.floor(Math.random() * 100) + 1;
const CHANCES = 6;

function apostarNumero() {

    var numero = Number(document.getElementById("inNumero").value);

    if (numero == "" || isNaN(numero) || numero > 100) {
        alert("Digite corretamente");
        document.getElementById("inNome").focus();
        return;
    }

    var dicas = document.getElementById("outDica"); 
    var erros = document.getElementById("outErros");
    var chances = document.getElementById("outChances");

    if ( numero == sorteado)
    {
        alert("Parabens, acertou");
        btApostar.disabled = true;
        btJogar.textContent = "exibe";
        dicas.textContent = " número sorteado: " + sorteado;
    }
    
    else{
        if (erros.indexOf(numero) >= 0){
            alert("Já tentou " + numero + " tente outro");
        }
        else
        {
            erros.push(numero);
            var numErros = erros.length;
            var numChances = CHANCES - numErros;
        

        erros.textContent = numErros + " (" + erros.join(",") +")";
        chances.textContent = numChances;

        if(numChances == 0){
            alert("Suas chances acabaram");
            btApostar.disabled = true;
            btJogar.className = "exibe";
            dicas.textContent = "Game Over! Número sorteado: " + sorteado;
        }
        else{
            var dica = numero < sorteado? "maior" : "menor";
            outDica.textContent = "Dica: tente um número " + dica;
        }

    }
    }

    numero = "";
    numero.focus();

    
}



var btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", apostarNumero);




