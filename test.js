const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./src/sumOfOther');
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

const make = require('./src/make');
describe('make', () => {
  function sum(a, b) {
    return a + b;
  }
  it('count sum', () => {
    assert.equal(make(15)(34, 21, 666)(41)(sum), 777);
  });

  it('count sum', () => {
    assert.deepEqual(make(15)(34, 21)(41)(sum), 111);
  });

  it('count sum', () => {
    assert.deepEqual(make(15)(34, 21, 666)(41)(5)(125)(sum), 907);
  });
});
