const LoopsAdvanced = () => {
  //Q1 Write a function that searches for an element in an array and returns the index , if the element is not present then just return -1

  const arr = [99, -45, 0, 12, 7, 88, -1, 64, 32];

  function searchingElements(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) return i;
    }
    return -1;
  }

  const result = searchingElements(arr, 32);
  //   console.log(result);

  //Q2 Write a function that returns the number of negative numbers in an array

  const arr1 = [-14, 7, 0, 23, 19, 8, 42, 3, 17];

  function countNegative(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) count++;
    }
    return count;
  }

  const result1 = countNegative(arr1);
  //   console.log(result1);

  //Q3 Write a function that returns the largest number in an array

  const arr2 = [-32, 14, 6, 0, 91, -7, 28, 3, -19, 45];

  function largestNumber(arr) {
    if (arr.length === 0) return undefined; // If array is empty

    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) max = arr[i];
    }
    return max;
  }

  const result2 = largestNumber(arr2);
  console.log(result2);

  return <div>LoopsAdvanced</div>;
};

export default LoopsAdvanced;
