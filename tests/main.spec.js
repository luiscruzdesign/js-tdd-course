/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* global describe,it */
/* eslint-env mocha */
describe('Main', function () {
  describe('Method A', function () {
    context('Case 1', function () {
      it('should happen blabla', function () {
        // espera que aconteça
        // Entrada de dados / método sum(2,2)
        // Espera retornar (4) => true | (3) => false => broken test
      });
    });

    context('Case 2', function () {

    });
  });

  describe('Method B', function () {

  });
});
