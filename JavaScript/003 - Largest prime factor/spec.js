var solution = require('./solution.js');
var expect = require('chai').expect;

describe('003 - Largest prime factor', function() {
    it('Should find the largest prime factor of the number 600851475143.', function() {
        var result = solution.execute();
        expect(result).to.equal(6857);
    });
});