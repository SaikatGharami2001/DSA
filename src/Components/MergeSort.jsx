const MergeSort = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function print(a) {
    let max = 0;
    for (let i = 0; i < a.length; i++) {
      if (arr[i] > max) max = arr[i];
    }
    return max;
  }

  console.log(print(arr));

  return <div>MergeSort</div>;
};

export default MergeSort;
