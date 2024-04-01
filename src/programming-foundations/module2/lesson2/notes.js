function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  // Outer loop for all elements of the array
  for (let i = 0; i < n - 1; i++) {
    swapped = false; // To keep track if any swap happened

    // Inner loop for comparing the adjacent elements
    for (let j = 0; j < n - i - 1; j++) {
      console.log(swapped, arr);
      // Compare the adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap if elements are in wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true; // Marking that a swap happened
      }
    }

    // If no two elements were swapped by inner loop, then break
    if (!swapped) break;
    console.log("End of iteration", i);
  }
  return arr;
}

// Example usage:
let arr = [10, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", arr);

bubbleSort(arr);

console.log("Sorted array:", arr);

let arr2 = [10, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", arr2);
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
function bubbleSort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      console.log(arr);
      if (arr[j] < arr[i]) {
        swap(arr, i, j);
      }
    }
    console.log("End of iteration", i + 1);
  }
  return arr;
}
bubbleSort2(arr2);
console.log("Sorted array:", arr2);

let arr3 = [4, 7, 3, 1, 9, 5];
console.log(arr3); // 4, 7 , 3

function insertionSort(arr) {
  console.log("Unsorted:", arr);

  let temp;
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    temp = arr[i]; //i=1 => 7 //i=2 => 3

    while (j > 0 && arr[j - 1] > temp) {
      // 1 > 7 = false so next iteration i // i=2 => 7 > 3
      arr[j] = arr[j - 1]; // j=2 so arr[2] = arr[1] => 7
      j--;
      console.log(i, arr, temp);
    }
    arr[j] = temp;
    console.log("Iteration", i, arr, j);
  }
  console.log("Sorted:", arr);
  return arr;
}

insertionSort(arr3);
