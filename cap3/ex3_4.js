

function exibirHorario()
{
    var hora = document.getElementById("inHora").value;
    

    if(hora == "" || isNaN(hora))
    {
        alert("Digite o horário");
        document.getElementById("inHora").focus();
        return;
    }

    hora = Number(hora);
    
    var horaFranca = hora + 5;

    if(horaFranca > 24)
    {
        horaFranca = horaFranca - 24;
    }

    document.getElementById("resultado").textContent = "Hora na França: " + horaFranca.toFixed(2);

}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirHorario);