var solution = require('./solution.js');
var expect = require('chai').expect;

describe('006 - Sum square difference', function() {
    it('Should find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.', function() {
        var result = solution.execute();
        expect(result).to.equal(25164150);
    });
});