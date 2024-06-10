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

function calculateResult(calculationType){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === "ADD"){
        currentResult = currentResult + enteredNumber;
        mathOperator = "+";
    }else if(calculationType === "SUB"){
        currentResult = currentResult - enteredNumber;
        mathOperator = "-";
    }else if(calculationType === "DIV"){
        currentResult = currentResult / enteredNumber;
        mathOperator = "/";
    } else{
        currentResult = currentResult * enteredNumber;
        mathOperator = "*";
    }

    createAndWriteOutput(mathOperator,initialResult, enteredNumber);
    writeLog(calculationType, initialResult, enteredNumber, currentResult);
}


function add(){
   calculateResult("ADD");
}

function sub(){
    calculateResult("SUB");
}

function div(){
    calculateResult("DIV");
}

function mul(){
    calculateResult("MUL")
}



addBtn.addEventListener("click", add);  
subtractBtn.addEventListener("click", sub);
multiplyBtn.addEventListener("click", mul);
divideBtn.addEventListener("click", div);