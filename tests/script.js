'use strict';

const code = require('../script.js');
var it = require('mocha');
var expect = require('chai').expect;

describe('Two Sum', () => {

  it('Should return the indices of two values that total the target integer.', () => {
    expect(code.twoSum([1, 3, 5, 7, 9], 8)).to.equal([0, 3]);
  });

  it('Should return an array of indices.', () => {
    expect(code.twoSum([1, 3, 5, 7, 9])).to.be.a('array');
  });
});
