# Calculator.js

You are going to create a basic calculator with the simple functionalities

![demotask-calculator](https://user-images.githubusercontent.com/8784343/134820991-7f19e231-ae19-477e-bccb-8e014f8acca7.gif)

## Instructions

1. Fork and clone this [repo](https://github.com/JoinCODED/TASK-calculator-js)
2. Open `index.js` file. You should only work and edit this file.

   You will find 2 main functions.

   1. `buttonClick(text)`, that will be executed whenever you click on a button. It gives you the text of the button you clicked as a parameter

   ```js
   function buttonClick(text) {
     console.log("Clicking", text);
     // ...
   }
   ```

   2. `printOnConsole(text)`, that you will call to print the text you pass to the output screen.

   ```js
   function buttonClick(text) {
     console.log("Clicking", text);
     // ...
   }
   ```

## PART 1: Displaying numbers

1. When clicking on any number (from 0-9) , it should display it on the monitor
2. Clicking on zero while the number is zero shouldn't add zeros to the monitor
3. Clicking on `(AC)` operation should clear out the monitor
4. Clicking on any other button that is not a number should not display on the screen

## PART 2: Operation

- You only have to implement the basic operations (`+`, `-`, `x`, `÷`)
- There is no specific way to do this task. The only think you need to do is to make the operation work. Take this scenario:-
  - User clicked `1`
    - User should see `1` on the monitor
  - User clicked `+`
  - User clicked `5`
    - User should see `5` on the monitor
  - User clicked `=`
    - User should see the result `6` on the monitor
  - User clicked `AC`
    - User should see empty console
  - User clicked `5`
  - User clicked `0`
    - User should see `50`
  - User clicked `÷`
  - User clicked `5`
    - User should see `10`

## PART 3: History

History should display all the past done operations, along with the answer

- You should store all operations you did in an array and render it using the function `updateHistory(historyArray)`
- History should be in the following format

```
1 + 4 = 5
2 * 8 = 16
8 / 2 = 4
```
