/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* global describe,it */
/* eslint-env mocha */
describe('Main', function () {
  // roda uma vez antes do bloco
  before(function () {
    console.log('before');
  });

  // roda uma vez depois do bloco
  after(function () {
    console.log('after');
  });

  // roda todas as vezes, antes de cada bloco
  beforeEach(function () {
    console.log('beforeEach');
  });

  // roda todas as vezes, depois de cada bloco
  afterEach(function () {
    console.log('afterEach');
  });

  it('test 1', function () {
    console.log('test 1');
  });

  it('test 2', function () {
    console.log('test 2');
  });
});
