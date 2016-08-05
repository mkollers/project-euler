var solution = require('./solution.js');
var expect = require('chai').expect;

describe('005 - Smallest multiple', function() {
    it('Should find the smallest positive number that is evenly divisible by all of the numbers from 1 to 20.', function() {
        var result = solution.execute();
        expect(result).to.equal(232792560);
    });
});