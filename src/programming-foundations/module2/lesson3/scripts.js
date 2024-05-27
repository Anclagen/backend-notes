// Function to merge two sorted arrays into one sorted array
function merge(arr1, arr2) {
  // Initialize an empty array to store the result and two pointers for arr1 and arr2
  let res = [],
    i = 0,
    j = 0;

  // Sort the first array using selection sort
  if (arr1.length > 1) {
    let min = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (i !== min) {
        if (arr1[i] < arr1[min]) {
          // Swap the elements
          [arr1[i], arr1[min]] = [arr1[min], arr1[i]];
          // Update the minimum
          min = i;
        }
      }
    }
  }

  // Sort the second array using selection sort
  if (arr2.length > 1) {
    let min = 0;
    for (let i = 0; i < arr2.length; i++) {
      if (i !== min) {
        if (arr2[i] < arr2[min]) {
          // Swap the elements
          [arr2[i], arr2[min]] = [arr2[min], arr2[i]];
          // Update the minimum
          min = i;
        }
      }
    }
  }

  // Merge the two sorted arrays into one
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  // If there are remaining elements in arr1, add them to the result
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }

  // If there are remaining elements in arr2, add them to the result
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }

  // Return the merged and sorted array
  return res;
}

// Function to perform merge sort on an array
function mergeSort(arr) {
  // If the array has 1 or 0 elements, it is already sorted
  if (arr.length <= 1) return arr;

  // Split the array into two halves
  let mid = Math.ceil(arr.length / 2);

  let arr1 = arr.slice(0, mid);

  let arr2 = arr.slice(mid);

  let arr1_subarrays = [],
    sorted_arr1_subarrays = [];

  let arr2_subarrays = [],
    sorted_arr2_subarrays = [];

  // Split arr1 into subarrays of two elements each
  for (let i = 0; i < arr1.length; i += 2) {
    arr1_subarrays.push(arr1.slice(i, i + 2));
  }

  // Split arr2 into subarrays of two elements each
  for (let i = 0; i < arr2.length; i += 2) {
    arr2_subarrays.push(arr2.slice(i, i + 2));
  }

  // Sort each subarray of arr1 and add the sorted elements to sorted_arr1_subarrays
  for (let i = 0; i < arr1_subarrays.length; i += 2) {
    let result = merge(arr1_subarrays[i], arr1_subarrays[i + 1]);
    result.forEach((value) => sorted_arr1_subarrays.push(value));
  }

  // Sort each subarray of arr2 and add the sorted elements to sorted_arr2_subarrays
  for (let i = 0; i < arr2_subarrays.length; i += 2) {
    let result = merge(arr2_subarrays[i], arr2_subarrays[i + 1]);
    result.forEach((value) => sorted_arr2_subarrays.push(value));
  }

  // Merge the two sorted arrays into one
  let result = merge(sorted_arr1_subarrays, sorted_arr2_subarrays);

  // Return the sorted array
  return result;
}

// Test the mergeSort function
console.log(mergeSort([70, 50, 30, 10, 20, 40, 60]));