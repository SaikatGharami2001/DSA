const RemoveDuplicates = () => {
  const a = [100, 200, 1, 1, 2, 3];

  function dub(arr) {
    let k = 1;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[k - 1]) {
        k = k + 1;
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
