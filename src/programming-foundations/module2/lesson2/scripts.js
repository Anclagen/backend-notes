let firstNumber = 0;
let secondNumber = 0;

// Get the first and second positive integers
while (firstNumber <= 0 || isNaN(firstNumber)) {
  firstNumber = parseInt(prompt("Enter the first positive integer:"));
}

while (secondNumber <= 0 || isNaN(firstNumber)) {
  secondNumber = parseInt(prompt("Enter the second positive integer:"));
}

// Get the maximum and minimum of the two numbers
const size = Math.max(firstNumber, secondNumber);
const min = Math.min(firstNumber, secondNumber);

// Create an array of numbers from 0 to the maximum number
const numbers = Array.from(Array(size).keys());

/*----------------- Sort() -------------------*/
function jsSort(arr) {
  const copy = [...arr]; // Create a copy of the array

  // Sort the numbers by the remainder of the division by the minimum number
  copy.sort((a, b) => {
    const comparison = (a % min) - (b % min); // sort by the remainder
    if (comparison === 0) {
      // if the remainder is the same, sort by the number itself
      return a - b;
    }
    return comparison; // return the comparison
  });

  return copy;
}

const jsSortNumbers = jsSort(numbers);

document.getElementById("sortOutput").innerText = "Output in console: " + jsSortNumbers.join(", ");
console.log("sort():", jsSortNumbers);

/*----------------- Bubble Sort -------------------*/

// Bubble sort the numbers by the remainder of the division by the minimum number
function bubbleSort(arr) {
  const copy = [...arr]; // Create a copy of the array
  let n = copy.length;
  let swapped;

  // Outer loop for all elements of the array
  for (let i = 0; i < n - 1; i++) {
    swapped = false; // To keep track if any swap happened

    // Inner loop for comparing the adjacent elements
    for (let j = 0; j < n - i - 1; j++) {
      // Compare the adjacent elements
      if (copy[j] % min > copy[j + 1] % min) {
        // Swap if elements are in wrong order
        let temp = copy[j];
        copy[j] = copy[j + 1];
        copy[j + 1] = temp;
        swapped = true; // Marking that a swap happened
      } else if (copy[j] % min === copy[j + 1] % min) {
        // If the remainder is the same, sort by the number itself
        if (copy[j] > copy[j + 1]) {
          // Swap if elements are in wrong order
          let temp = copy[j];
          copy[j] = copy[j + 1];
          copy[j + 1] = temp;
          swapped = true; // Marking that a swap happened
        }
      }
    }

    // If no two elements were swapped by inner loop, then break as the array is sorted
    if (!swapped) break;
  }

  return copy;
}

const bubbleSortNumbers = bubbleSort(numbers);

document.getElementById("bubbleOutput").innerText = "Output in console: " + bubbleSortNumbers.join(", ");
console.log("Bubble Sort:", bubbleSortNumbers);
