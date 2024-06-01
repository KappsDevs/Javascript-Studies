
function mostrarResultado()
{
    var nome = document.getElementById("inNome").value;
    var altura = Number(document.getElementById("inAltura").value);
    var feminino = document.getElementById("rdFeminino").checked;
    var masculino = document.getElementById("rdMasculino").checked;

    if(nome == "" || (masculino == false && feminino == false))
    {
        alert("Por favor, informe o nome e selecione o sexo");
        document.getElementById("inNome").focus(); // posiciona no campo de edição inNome
        return;
    }

    if(altura == 0 || isNaN(altura)) // Not a Number)
    {
        alert("Por favor, informe a altura corretamente...")
        document.getElementById("inAltura").focus();
        return;
    }

    if(masculino)
    {
        var peso = 22 * Math.pow(altura,2);
    }

    else
    {
        var peso = 21 * Math.pow(altura, 2);
    }



    document.getElementById("resultado").textContent = nome + ": Seu peso ideal é: " + peso.toFixed(3) + "kg"
}

function limparCampos()
{
    document.getElementById("inNome").value = "";
    document.getElementById("inAltura").value = "";
    document.getElementById("rdFeminino").checked = false;
    document.getElementById("rdMasculino").checked = false;
    document.getElementById("resultado").textContent = "";
    document.getElementById("inNome").focus();
}

var Resultado = document.getElementById("btCalculo");
Resultado.addEventListener("click", mostrarResultado);

var limpar = document.getElementById("btLimpar");
limpar.addEventListener("click", limparCampos);