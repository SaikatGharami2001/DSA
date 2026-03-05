const Palindrome = () => {
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
  console.log(result);

  return <div>Palindrome</div>;
};

export default Palindrome;
