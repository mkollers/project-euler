var solution = require('./solution.js');
var expect = require('chai').expect;

describe('007 - 10001st prime', function() {
    it('Should find the the 10001st prime number.', function() {
        var result = solution.execute();
        expect(result).to.equal(104743);
    });
});