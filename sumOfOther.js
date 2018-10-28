function sumOfOther(arr) {
  let sum = arr.reduce((p, c) => p + c, 0);
  return arr.map(i => (sum - i));
}
