const ReverseInteger = () => {
  let num = 123;

  let r = 0;

  while (num !== 0) {
    let d = num % 10;
    num = Math.trunc(num / 10);
    r = r * 10 + d;
  }

  let limit = 2 ** 31;

  if (r < -limit || r > limit - 1) console.log(0);

  console.log(r);

  // return <div>ReverseInteger</div>;
};

export default ReverseInteger;
