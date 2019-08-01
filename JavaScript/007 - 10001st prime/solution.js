var prime = require('../shared/prime');

function execute() {
    var count = 0;
    var current = 2;
    while (count < 10001) {
        if (prime.isPrime(current)) {
            count++;
        }
        current++;
    }
    return current - 1;
}
module.exports.execute = execute;