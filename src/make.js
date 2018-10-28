module.exports = function make(a) {
  let tempSum = [a];

  function fn(...b) {
    if (typeof b[0] !== 'function') {
      tempSum = tempSum.concat(b);
    }
    return fn;
  }

  fn.toString = () => tempSum.reduce((p, c) => p + c, 0);

  return fn;
};
