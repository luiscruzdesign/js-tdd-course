/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* global describe,it */
/* eslint-env mocha */
describe('Main', function () {
  let arr;

  // roda uma vez antes do bloco
  before(function () {
    // inicia conexão no banco
    // criar conjunto de dados
  });

  // roda uma vez depois do bloco
  after(function () {
    // termina conexão no banco
    // apagar conjunto de dados
  });

  // roda todas as vezes, antes de cada bloco
  beforeEach(function () {
    arr = [1, 2, 3];
  });

  // roda todas as vezes, depois de cada bloco
  afterEach(function () {
  });

  it('should have a size o 4 when push another value to the array', function () {
    arr.push(4);
    console.log(arr.length); // 4
  });

  it('should have a size o 2 when pop a value to the array', function () {
    arr.pop();
    console.log(arr.length); // 2
  });

  it('should remove 3 when use pop in the array', function () {
    console.log(arr.pop() === 3); // true
  });
});
