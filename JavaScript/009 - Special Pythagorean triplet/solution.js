function execute() {
    for (var a = 1; a < 1000; a++) {
        for (var b = a + 1; b + a < 1000; b++) {
            var c = 1000 - a - b;
            if (a * a + b * b === c * c) {
                return a * b * c;
            }
        }
    }
}
module.exports.execute = execute;