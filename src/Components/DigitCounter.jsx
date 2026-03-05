const DigitCounter = () => {
  // Write a function that returns the count of digits in a number
  const number = -123456789;
  let count = 0;
  function digitCounter(num) {
    if (num < 0) num = Math.abs(num);
    if (num == 0) return 1;

    let newNum = num;
    while (newNum > 0) {
      newNum = Math.floor(newNum / 10);
      count++;
    }
    return count;
  }

  const result = digitCounter(number);
  console.log(result);

  return <div>Digit</div>;
};

export default DigitCounter;
