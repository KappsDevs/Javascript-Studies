// Parecido com Python, é possível utilizar uma formatação com variável dentro de string:
// `(${currentResult} + 10)` 

const DEFAULT = 0


let currentResult = DEFAULT;





function showSum(){
    let result = currentResult + userInput.value;
    outputResult(result, " ");
}

addBtn.addEventListener("click", showSum);