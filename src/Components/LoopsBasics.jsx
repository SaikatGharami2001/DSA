const LoopsBasics = () => {
  // Basic Loop Structure

  //   for (let i = 5; i > 0; i--) {
  //     console.log(i);
  //   }

  // Printing Array Elements

  //   const arr = [1, 2, 3, 4, 6, 7, 9];
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(arr[i] * 3);
  //   }

  // Printing Even Number in an Array

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) console.log("Odd Numbers Are : " + arr[i]);
  }

  return <></>;
};

export default LoopsBasics;
