const RemoveDuplicates = () => {
  const a = [1, 1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 7, 7];

  function dub(arr) {
    let k = 1;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[k]) {
        k++;
        arr[k] = arr[i];
      }
    }

    return k;
  }

  const result = dub(a);
  console.log(result);

  return <div>RemoveDuplicates</div>;
};

export default RemoveDuplicates;
