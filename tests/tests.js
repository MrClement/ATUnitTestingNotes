//run tests with the command: mocha tests

var expect = require('chai').expect;
var assert = require('chai').assert;

//describe a collection of tests
describe('Numbers still work', function() {
  //one test (BDD) uses expect
  it('should be a number', function() {
    expect(5).to.be.a('number');
  });
  //TDD uses assert (less readable)
  it('should be a number', function() {
    assert(5, 'number');
  });
  it('should be 5', function() {
    expect(5).to.equal(5);
  });
});

//testing our random function from index.js
describe('RandNum works', function() {

  rand = require('../index');
  nums = [];
  for(i = 0; i < 250; i++) {
    lower = Math.floor(Math.random()*10);
    upper = Math.floor(Math.random()*100) + lower + 1;
    nums.push({
      "num": rand(lower, upper),
      "lower": lower,
      "upper": upper
    });
  }

  it('should be a number', function() {
    expect(5).to.be.a('number');
  });
  nums.forEach(function(e) {
    it('' + e.num + ' should be within the range', function() {
      expect(e.num).to.be.within(e.lower, e.upper-1);
    });
  });
})
