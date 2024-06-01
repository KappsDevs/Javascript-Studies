

function mostrarResultado()
{
    var Nome = document.getElementById("inNome").value;

    var Nota1 = Number(document.getElementById("inNota1").value);

    var Nota2 = Number(document.getElementById("inNota2").value);

    var media = (Nota1 + Nota2) / 2;

    document.getElementById("media").textContent = "Média das Notas: " + media;

    if (media >= 7)
    {
        document.getElementById("resultado").textContent = "Parabéns " + Nome + "! Você foi aprovado";
        document.getElementById("resultado").style.color = "blue";
    }

    else 
    {
        document.getElementById("resultado").textContent = "Ops " + Nome + "... Você foi reprovado";
        document.getElementById("resultado").style.color = "red";
    }
}

var btResultado = document.getElementById("btResultado");
btResultado.addEventListener("click", mostrarResultado);

