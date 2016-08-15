var solution = require('./solution.js');
var expect = require('chai').expect;

describe('008 - Largest product in a series', function() {
    it('Should find product of the thirteen adjacent digits in the 1000-digit number that have the greatest product.', function() {
        var result = solution.execute();
        expect(result).to.equal(23514624000);
    });
});