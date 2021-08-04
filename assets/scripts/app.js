const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== "DIVIDE"
  ) {
    return;
  }

  // if (
  //   calculationType === "ADD" ||
  //   calculationType === "SUBTRACT" ||
  //   calculationType === "MULTIPLY" ||
  //   calculationType === "DIVIDE"
  // ) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === "ADD") {
      currentResult += enteredNumber;
      mathOperator = "+";
    } else if (calculationType === "SUBTRACT") {
      currentResult -= enteredNumber;
      mathOperator = "-";
    } else if (calculationType === "MULTIPLY") {
      currentResult *= enteredNumber;
      mathOperator = "*";
    } else if (calculationType === "DIVIDE") {
      currentResult /= enteredNumber;
      mathOperator = "/";
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
  }
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function divide() {
  calculateResult("DIVIDE");
}

function multiply() {
  calculateResult("MULTIPLY");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);
