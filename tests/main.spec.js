/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* global describe,it */
/* eslint-env mocha */
const expect = require('chai').expect;
const calc = require('../src/main.js');

describe('Calc', function () {

  // smoke tests
  describe('smoke tests', function () {

    it('should exist the calc lib', function () {
      expect(calc).to.exist;
    });

    it('should exist method `sum`', function () {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('should exist method `sub`', function () {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

    it('should exist method `mult`', function () {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });

    it('should exist method `div`', function () {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });
  });

  describe('Sum', function () {
    it('should return 4 when sum(2,2)', function () {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', function () {
    it('should return 4 when sub(6,2)', function () {
      expect(calc.sub(6, 2)).to.be.equal(4);
    });
    it('should return -4 when sub(6,10)', function () {
      expect(calc.sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Mult', function () {
    it('should return 4 when mult(2,2)', function () {
      expect(calc.mult(2, 2)).to.be.equal(4);
    });
  });
});
