const SecondLargest = () => {
  // Q1 Write a function to find the second largest number from an Array of Elements

  const arr = [12, -7, 0, 45, 49, 3, -19, 28, 6, -32, 91];

  function secondLargest(arr) {
    let largestNum = -Infinity;
    let secondLargestNum = -Infinity;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largestNum) {
        secondLargestNum = largestNum;
        largestNum = arr[i];
      } else if (arr[i] > secondLargestNum) secondLargestNum = arr[i];
    }
    return secondLargestNum;
  }

  const result = secondLargest(arr);
  console.log(result);

  return <div>SecondLargest</div>;
};

export default SecondLargest;
