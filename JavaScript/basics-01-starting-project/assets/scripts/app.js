// Parecido com Python, é possível utilizar uma formatação com variável dentro de string:
// `(${currentResult} + 10)` 

const DEFAULT = 0
let currentResult = DEFAULT;
let logEntries = [];

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resutlBeforeCalc, calcNumber){
    const calcDescription = `${resutlBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeLog(operationIdentifier, prevResult, operationNumber,newResult){
    
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };

    logEntries.push(logEntry);
    console.log(logEntries);
}

function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput("+",initialResult, enteredNumber);
    
    writeLog("ADD", initialResult, enteredNumber, currentResult);
}

function sub(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput("-", initialResult, enteredNumber);
    writeLog("SUB", initialResult, enteredNumber, currentResult);

}

function mul(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput("*", initialResult, enteredNumber);
    writeLog("MUL", initialResult, enteredNumber, currentResult);

}

function div(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput("/", initialResult, enteredNumber);
    writeLog("DIV", initialResult, enteredNumber, currentResult);

}

addBtn.addEventListener("click", add);  
subtractBtn.addEventListener("click", sub);
multiplyBtn.addEventListener("click", mul);
divideBtn.addEventListener("click", div);