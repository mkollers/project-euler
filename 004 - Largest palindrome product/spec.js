var solution = require('./solution.js');
var expect = require('chai').expect;

describe('004 - Largest palindrome product', function() {
    it('Should find the largest palindrome made from the product of two 3-digit numbers.', function() {
        var result = solution.execute();
        expect(result).to.equal(906609);
    });
});