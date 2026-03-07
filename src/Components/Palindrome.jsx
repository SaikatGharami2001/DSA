const Palindrome = () => {
  // Write a function to check if the number is Palindrome or not

  const num = -919;

  function Pal(n) {
    let x = n;

    if (x < 0) return false;

    let r = 0;
    while (x > 0) {
      let d = x % 10;
      r = r * 10 + d;
      x = Math.floor(x / 10);
    }

    if (r === n) return true;
    else return false;
  }

  const result = Pal(num);
  // console.log(result);

  // Write a function to check  the numbers present inside an array are Palindrome or not

  const arr = [11, 121, 919, 808];
  const arr2 = [];

  function isPalindrome(arr) {
    for (let i = 0; i < arr.length; i++) {
      let r = 0;
      let copy = arr[i];

      while (copy > 0) {
        let d = copy % 10;
        r = r * 10 + d;
        copy = Math.floor(copy / 10);
      }

      if (arr[i] === r) arr2.push(arr[i]);
      // else arr2.push(false);
    }

    return arr2;
  }

  const resultPal = isPalindrome(arr);
  console.log(resultPal);

  return <div>Palindrome</div>;
};

export default Palindrome;
