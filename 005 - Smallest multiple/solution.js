function execute() {
    var i = 20;
    while (!isDivisible(i)) {
        i += 20;
    }
    return i;
}

function isDivisible(n) {
    for (var i = 19; i > 10; i--) {
        if (n % i !== 0) {
            return false;
        }
    }
    return true;
}

module.exports.execute = execute;