const Digit = () => {
  //
  let a = 10;
  let c = 0;
  while (a > 0) {
    a = Math.floor(a / 10);
    c++;
  }
  console.log(c);

  return <div>Digit</div>;
};

export default Digit;
