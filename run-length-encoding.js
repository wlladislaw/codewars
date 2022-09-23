var runLengthEncoding = function (str) {
  let res = [];
  let count = 1;
  let prev = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== prev) {
      res.push([count, prev]);
      count = 1;
      prev = str[i];
    } else {
      count++;
    }
  }
  res.push([count, prev]);
  return res;
};
console.log(runLengthEncoding('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW'));
