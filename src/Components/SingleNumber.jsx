import React from "react";

const SingleNumber = () => {
  const array = [2, 2, 1];
  let k = 0;

  function abc(arr) {
    for (let i = 0; i < arr.length; i++) {
      let count = 0;

      for (let j = 0; j < arr.length; j++) if (arr[i] === arr[j]) count++;

      if (count === 1) return arr[i];
    }

    return k;
  }

  console.log(abc(array));

  return <div>SingleNumber</div>;
};

export default SingleNumber;
