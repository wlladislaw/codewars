function isPrime(num) {
  if (num < 2) return false;
  else if (num === 2) return true;
  else {
    for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
      if (num % i == 0) {
        return false;
      }
    }
  }
  return true;
}

function duplicateEncode(word) {
  const array = word.toLowerCase().split('');
  const duplicateList = array.filter(
    (el, index, arr) => arr.indexOf(el) !== index
  );
  let res = '';
  for (let i = 0; i < array.length; i++) {
    if (duplicateList.includes(array[i])) {
      res += ')';
    } else {
      res += '(';
    }
  }
  return res;
}

console.log(duplicateEncode('hllp'));


