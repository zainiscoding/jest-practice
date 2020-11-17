function reverse(str) {
  const strArr = [...str];
  const reversedArr = [];
  for (let i = strArr.length; i >= 0; i--) {
    reversedArr.push(strArr[i]);
  }
  return reversedArr.join('');
}

module.exports = reverse;
