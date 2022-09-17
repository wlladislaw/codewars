

function calculate() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return function () {
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  };
}

// console.log(calculate(143, 13)(1100)); // should return 3
