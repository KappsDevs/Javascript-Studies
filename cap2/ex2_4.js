function  mostrarConsumo()
{
    var inQuilo = document.getElementById("inValor").value;
    var inConsumo = document.getElementById("inConsumo").value;

    var quilo = Number(inQuilo);
    var consumo = Number(inConsumo);

    var valor = (quilo/1000) * consumo;

    document.getElementById("outValor").textContent = "Valor a pagar R$: " + valor.toFixed(2);
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarConsumo);