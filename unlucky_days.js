/*Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.*/

function unluckyDays(year) {
  let count = 0;
  let i = 0;
  while (i < 12) {
    let date = new Date(year, i, 13);
    if (date.getDay() === 5) {
      count += 1;
    }
    i++;
  }
  return count;
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (
    enteredCode === correctCode &&
    Date.parse(expirationDate) - Date.parse(currentDate) >= 0
  ) {
    return true;
  } else {
    return false;
  }
}

