const LoopInLoop = () => {
  //Print
  // *****
  // *****
  // *****
  // *****
  // *****

  let n = 10;

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = n; j <= i; j++) {
      row = row + "*";
    }
    console.log(row);
  }

  return <div>LoopInLoop</div>;
};

export default LoopInLoop;
