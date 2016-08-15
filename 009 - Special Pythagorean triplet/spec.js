var solution = require('./solution.js');
var expect = require('chai').expect;

describe('009 - Special Pythagorean triplet', function() {
    it('Should find the product of the Pythagorean triplet for which a + b + c = 1000.', function() {
        var result = solution.execute();
        expect(result).to.equal(31875000);
    });
});