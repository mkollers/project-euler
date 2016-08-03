var solution = require('./solution.js');
var expect = require('chai').expect;

describe('1 - Multiples of 3 and 5', function() {
    it('Should find the sum of all the multiples of 3 or 5 below 1000.', function() {
        var result = solution.execute();
        expect(result).to.equal(233168);
    });
});