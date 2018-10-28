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

const recursion = require('./src/recursion');
describe('recursion', () => {
  it('array from tree', () => {
    let tree = {
      value: 100,
      left: { value: 90, left: { value: 70 }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 }, right: { value: 130 } }
    };
    assert.equal(recursion(tree), [[100], [90, 120], [70, 99, 110, 130]]);
  });

  it('array from tree', () => {
    let tree2 = {
      value: 100,
      left: { value: 90 },
      right: { value: 120, left: { value: 110 }, right: { value: 130 } }
    };
    assert.deepEqual(recursion(tree2), [[100], [90, 120], [110, 130]]);
  });

  it('array from tree', () => {
    let tree3 = {
      value: 100,
      left: { value: 90 },
      right: { value: 120, left: { value: 110 }, right: { value: 130, left: { value: 127 } } }
    };
    assert.deepEqual(recursion(tree3), [[100], [90, 120], [70, 99, 110, 130], [127]]);
  });
});
