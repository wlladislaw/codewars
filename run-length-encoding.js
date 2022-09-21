var runLengthEncoding = function (str) {
  let strArr = str.split('');
  let res = [];
  let end = 0
  for (let i = 0; i < strArr.length; i++) {
    let arr = [];
    let count = 1;
    for (let j = 0; j < strArr.length-end; j++) {
          if (strArr[j] === strArr[j + 1]) {
            count++;
          }
        }

    arr.push(count);
    res.push(arr);

    end += count;
    i += count;
  }
  return res;
};

console.log(runLengthEncoding('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbb'));
