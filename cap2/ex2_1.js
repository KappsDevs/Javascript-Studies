

/* 
    (i)   var nome = document.getElementById("nome").value; -> isso é a mesma coisa que o que ta escrito nas próximas 2 linhas:
    (ii)  var inputNome = document.getElementById("nome");
    (iii) var nome = inputNome.value;

    -> Se o programa trabalhar com o mesmo elemento mais de uma vez, use (i)
    -> Caso contrário, use o método (ii) e (iii)
    
*/

// declara a função
function mostrarOla()
{
    // obtém o conteúdo do campo (com id=) nome
    var nome = document.getElementById("nome").value;

    // exibe no parágrafo (resposta): olá + nome
    document.getElementById("resposta").textContent = "Olá " + nome;

}

//cria uma referência ao botão (com id=) mostrar
var mostrar = document.getElementById("mostrar");
//registra para o botão "mostrar" um ouvinte para o evento 'click',
//que ao ser clicado irá chamar a função mostrarOla
mostrar.addEventListener("click", mostrarOla);

console.log("Script carregado e manipulador de clique atribuído");