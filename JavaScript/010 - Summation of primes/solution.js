var prime = require('../shared/prime');

function execute() {
    var sum = 2;
    for (var i = 3; i < 2e+6; i += 2) {
        if (prime.isPrime(i)) {
            sum += i;
        };
    }
    return sum;
}
module.exports.execute = execute;