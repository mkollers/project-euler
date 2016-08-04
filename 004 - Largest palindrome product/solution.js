function execute() {
    var max = 0;
    for (var i = 999; i > 99; i--) {
        for (var j = 999; j > 99; j--) {
            var n = i * j;
            if (n < max) {
                break;
            }
            n = n.toString();
            var palindrome = true;
            for (var l = 0; l < n.length / 2; l++) {
                if (n[l] !== n[n.length - l - 1]) {
                    palindrome = false;
                    break;
                }
            }
            if (palindrome) {
                max = Number(n);
            }
        }
    }
    return max;
}

module.exports.execute = execute;