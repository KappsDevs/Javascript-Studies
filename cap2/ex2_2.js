function mostrarTitulo()
{
    var inTitulo = document.getElementById("inTitulo").value;
    var inTempo = document.getElementById("inTempo").value;

    
    
    var horas = Math.floor(inTempo/60);
    var minutos = inTempo % 60;

    document.getElementById("outTitulo").textContent = inTitulo;
    document.getElementById("outResposta").textContent = horas + "horas(s) e " + minutos + "minuto(s)";

}

var mostrar = document.getElementById("btConverte");
mostrar.addEventListener("click", mostrarTitulo);