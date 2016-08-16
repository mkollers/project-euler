var solution = require('./solution.js');
var expect = require('chai').expect;

describe('010 - Summation of primes', function() {
    it('Should find the sum of all the primes below two million.', function() {
        var result = solution.execute();
        expect(result).to.equal(142913828922);
    });
});