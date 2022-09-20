function numberOfPairs(gloves) {
  let count = 0;
  let copyGloves = [...gloves].sort();
  for (let i = 0; i < copyGloves.length; i++) {
    if (copyGloves[i] === copyGloves[i + 1]) {
      count++;
      i += 1;
    } else {
      for (let j = i + 1; j < copyGloves.length; j++) {
        if (copyGloves[j] === copyGloves[i]) {
          count++;
          copyGloves.splice(j, 1);
          // gloves.splice(j,1)
          break;
        }
      }
    }
  }
  return count;
}

console.log(
  numberOfPairs([
    'gray',
    'black',
    'purple',
    'purple',
    'gray',
    'black',
    'gray',
    'black',
    'purple',
    'purple',
    'gray',
    'black',
  ])
);
