/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* global describe,it */
/* eslint-env mocha */
const expect = require('chai').expect;

describe('Main', function () {
  let arr;

  // roda todas as vezes, antes de cada bloco
  beforeEach(function () {
    arr = [1, 2, 3];
  });

  // testar tipos ou se existe (smoke test)
  it('should be an array', function () {
    expect(arr).to.be.a('array');
  });

  it('should have a size o 4 when push another value to the array', function () {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should remove 3 when use pop in the array', function () {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('should return 3 qhen pop 3 from the array', function () {
    expect(arr.pop() === 3).to.be.true;
  });

  it('should have a size o 2 when pop a value to the array', function () {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });
});
