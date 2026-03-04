import React from "react";

const Practice = () => {
  // Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1

  const a = function search(a, target) {
    let index = -1;

    for (let i = 0; i < a.length; i++) {
      if (arr[i] === target) {
        index = i;
        break;
      }
    }
    return index;
  };

  const b = function searching(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == target) return i;
    }
    return -1;
  };

  // Write a function that returns the number of negative numbers in an array

  const c = function negative(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) count++;
    }
    return count;
  };

  // Write a function that returns the largest number in an array

  const d = function largest(arr) {
    if (arr.length == 0) return "Empty Array";

    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) largest = arr[i];
    }
    return largest;
  };

  // Write a function that returns the smallest number in an array

  const e = function smallest(arr) {
    let small = Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (small > arr[i]) small = arr[i];
    }
    return small;
  };

  // Write a function that returns the second largest  number in an array

  const arr = [1, 3, 53, 2, 99, 99, -2, -4, -9, -4, -2, -1];

  const f = function secondLargest(arr) {
    if (arr.length == 0) return "Empty Array";
    if (arr.length < 2) return "Array contains only 1 Number";

    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > first) {
        second = first;
        first = arr[i];
      } else if (arr[i] > second && arr[i] !== first) second = arr[i];
    }
    return second;
  };

  console.log(f(arr));

  return <div>Practice</div>;
};

export default Practice;
