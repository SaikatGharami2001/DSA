import React from "react";

const RemoveElements = () => {
  const nums = [0, 1, 2, 2, 3, 0, 4, 2];

  function removeEle(arr, val) {
    let k = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== val) {
        arr[k] = arr[i];
        k++;
      }
    }

    return arr;
  }

  const result = removeEle(nums, 2);
  console.log(result);

  return <div>RemoveElements</div>;
};

export default RemoveElements;
