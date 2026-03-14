const ApplyOperations = () => {
  const array = [1, 1, 1, 0, 0, 1];

  var apply = function (arr) {
    let k = 0;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] == arr[i + 1]) {
        arr[i] = arr[i] * 2;
        arr[i + 1] = 0;
      }
    }

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
  };

  console.log(apply(array));

  return <div>ApplyOperations</div>;
};

export default ApplyOperations;
