var solution = require('./solution.js');
var expect = require('chai').expect;

describe('002 - Even Fibonacci numbers', function() {
    it('Should find the sum of the even-valued terms in the Fibonacci sequence whose values do not exceed four million.', function() {
        var result = solution.execute();
        expect(result).to.equal(4613732);
    });
});