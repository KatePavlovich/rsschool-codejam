const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./sumOfOther');
describe('sumOfOther test', () => {
  it('should return an array where each element is the sum of other elements except element value', () => {
    const sum = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(sum, [8, 7, 6, 9]);
  });

  it('should return an array where each element is the sum of other elements except element value', () => {
    const sum = sumOfOther([20, 33, 0, 11]);
    assert.deepEqual(sum, [44, 31, 64, 53]);
  });

  it('should return an array where each element is the sum of other elements except element value', () => {
    const sum = sumOfOther([-20, 33, 0, 11]);
    assert.deepEqual(sum, [44, -9, 24, 13]);
  });
});
