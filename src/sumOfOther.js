module.exports = function sumOfOther(arr) {
  const sum = arr.reduce((p, c) => p + c, 0);
  return arr.map(i => sum - i);
};
