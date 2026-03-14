const MoveZeros = () => {
  let array = [0, 1, 0, 3, 12];

  function moveZeros(arr) {
    let k = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[k] = arr[i];
        k++;
      }
    }

    for (let i = k; i < arr.length; i++) {
      arr[i] = 0;
    }
    return arr;
  }

  const result = moveZeros(array);
  console.log(result);

  return <div>MoveZeros</div>;
};

export default MoveZeros;
