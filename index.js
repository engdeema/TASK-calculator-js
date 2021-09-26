/**
 * This function will be called when clicking on any button.
 * It's going to give you text as a parameter
 * This is your starting point
 * If you click on button 0, the text will be "0"
 * If you click on button +, the text will be "+"
 * ,... and so on
 */

let consoleText = "0";
let num1 = null;
let num2 = null;
let operation = null;
let isMakingOperation = false;
let history = [];

printOnConsole(consoleText);

function buttonClick(text) {
  console.log("Clicking", text);
  const parsedInt = parseInt(text);
  // Check if selected an operation
  if (isValidOperation(text)) {
    isMakingOperation = true;
    assignNumberForOperation(text);
  } else if (isNumber(text)) {
    selectNumber(text);
  } else {
    switch (text) {
      case "=":
        performResult();
        break;
      case "AC":
        clear();
        break;
    }
  }
  // Write your code here
}

function performResult() {
  num2 = parseInt(consoleText);
  const res = result(num1, num2, operation);

  history.push(`${num1} ${operation} ${num2} = ${res}`);
  consoleText = `${res}`;
  printOnConsole(consoleText);
  num1 = null;
  num2 = null;
  operation = null;

  updateHistory(history);
}
function isNumber(text) {
  return parseInt(text) >= 0 && parseInt(text) <= 9;
}
function selectNumber(text) {
  // You will only fall here if it was a number
  if (isMakingOperation) {
    // new number
    consoleText = `${removeZeros(text)}`;
    printOnConsole(consoleText);
    isMakingOperation = false;
  } else {
    // number
    consoleText += `${text}`;
    consoleText = removeZeros(consoleText);
    printOnConsole(consoleText);
  }
}
function assignNumberForOperation(text) {
  if (operation === null) {
    num1 = parseInt(consoleText);
    console.log("Num1 is assigned value of ", consoleText);
  } else if (num2 !== null) {
    num2 = parseInt(consoleText);
    console.log("Num2 is assigned value of ", consoleText);
  }
  operation = text;
}

function removeZeros(text) {
  return `${parseInt(text)}`;
}

function isValidOperation(text) {
  return ["+", "-", "x", "÷"].includes(text);
}

function clear() {
  consoleText = "0";
  printOnConsole(consoleText);
  num1 = null;
  num2 = null;
  operation = null;
}

function result(num1, num2, operation) {
  switch (operation) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "x":
      return num1 * num2;

    case "÷":
      return num1 / num2;
  }
}
/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */

// Remove Me after testing
// printOnConsole("123");
// updateHistory(["This is a sample historry", "1 + 5 = 6", "5 x 10 = 50"]);
