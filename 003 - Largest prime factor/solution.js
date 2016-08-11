var prime = require('../shared/prime');

function execute() {
    var rest = 600851475143;
    for (var i = 2; rest > 1; i++) {
        if (rest % i === 0 && prime.isPrime(i)) {
            rest /= i;  
        }
    }
    return i - 1;    
}

module.exports.execute = execute;