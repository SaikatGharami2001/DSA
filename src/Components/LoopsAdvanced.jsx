const LoopsAdvanced = () => {
  // Write a function that searches for an element in an array and returns the index , if the element is not present then just return -1

  const arr = [99, -45, 0, 12, 7, 88, -1, 64, 32];

  function searchingElements(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) return i;
    }
    return -1;
  }

  const result = searchingElements(arr, 32);
  console.log(result);

  return <div>LoopsAdvanced</div>;
};

export default LoopsAdvanced;
