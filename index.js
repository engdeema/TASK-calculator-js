/**
 *
 * This function will be called when clicking on any button.
 * It's going to give you text as a parameter
 * This is your starting point
 * If you click on button 0, the text will be "0"
 * If you click on button +, the text will be "+"
 * ,... and so on
 */
let array = [];
let firstNumber = 0;
let operation = "";
let seconNumber = "0";
let history = [];
printOnConsole(array.join(""));
function buttonClick(text) {
  console.log("Clicking", text);
  if (+array["0"] === text) {
  } else if (isNaN(text) && text !== "=" && "AC" !== text) {
    firstNumber = +array.join("");
    operation = text;
    array = [];
  } else if (text === "=") {
    seconNumber = +array.join("");
    printOnConsole(eval(`${firstNumber}  ${operation} ${seconNumber}`));
    history.push(
      `${firstNumber}   ${operation} ${seconNumber}  = ${eval(
        `${firstNumber}  ${operation} ${seconNumber}`
      )}`
    );
    updateHistory(history);
  } else {
    array.push(text);

    printOnConsole(array.join(""));
  }
  if (`AC` === text) {
    array = [];
  }
}

/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */

// Remove Me after testing
