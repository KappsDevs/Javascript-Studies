function mostrarPromocao()
{
    var inVeiculo = document.getElementById("inVeiculo"). value;
    var inPreco = document.getElementById("inPreco").value;

    var promocao = Math.round(inPreco/2);
    var parcela = Math.floor(promocao/12)
    
    document.getElementById("outVeiculo").textContent = "Promocação: " + inVeiculo;
    document.getElementById("outPreco").textContent = "Entrada de RS: " + promocao;
    document.getElementById("outPromocao").textContent = "+ 12x de RS: " + parcela;
}   

var mostrar = document.getElementById("btPromocao");
mostrar.addEventListener("click", mostrarPromocao);
