function baseConvert(base, num) {
  const max = 4;
  let arr = [];

  for(let i = max; i >= 0; i--) {
    let currentValue = 0;
    while(Math.pow(base, i) <= num) {
      num = num - Math.pow(base, i);
      currentValue++;
    }
    arr.push(currentValue);
  }
  return arr;
}
