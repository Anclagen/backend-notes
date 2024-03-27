//--- part 1 ---//
// 1
let valueOne = 0;

while (isNaN(valueOne) || valueOne <= 1 || valueOne >= 20) {
  valueOne = parseFloat(prompt("Enter a number between 1 and 20"));
}

// 2
function getMultiplicities(value) {
  let array = [];
  for (let i = 1; i <= 1000; i++) {
    if (i % value === 0) {
      console.log(i);
      array.push(i);
    }
  }
  document.getElementById("result").innerHTML = array.join(", ");
}

getMultiplicities(23);

//--- part 2 ---//

// 1

let valueTwo = "";

while (valueTwo >= 100 || valueTwo <= 0 || isNaN(valueTwo)) {
  valueTwo = parseFloat(prompt("Enter a number between 0 and 100"));
}
document.getElementById("result2").innerHTML = valueTwo;

// 2
let isGameOver = false;
function gameOver() {
  isGameOver = true;
  console.log("Game over");
  document.getElementById("gameOver").innerHTML = "Game over";
}

function increment() {
  if (valueTwo === 100 || isGameOver === true) {
    gameOver();
    return;
  } else {
    valueTwo++;
    document.getElementById("result2").innerHTML = valueTwo;
    console.log(valueTwo);
  }
}

function decrement() {
  if (valueTwo === 0 || isGameOver === true) {
    gameOver();
    return;
  } else {
    valueTwo--;
    document.getElementById("result2").innerHTML = valueTwo;
    console.log(valueTwo);
  }
}

function reset() {
  isGameOver = false;
  valueTwo = "";
  while (valueTwo >= 100 || valueTwo <= 0 || isNaN(valueTwo)) {
    valueTwo = parseFloat(prompt("Enter a number between 0 and 100"));
  }
  document.getElementById("result2").innerHTML = valueTwo;
  document.getElementById("gameOver").innerHTML = "";
}
