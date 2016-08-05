function execute() {
    var input = 100;

    var dif = (input * (input / 2) + (input / 2)); // 99 + 1 = 100 und 98 + 2 = 100 usw. -> 100 * 50 + 50, da der die mitte übrig bleibt
    dif *= dif; // jetzt quadrieren
    for (var i = 1; i <= input; i++) {
        dif -= i * i;
    }
    return dif;
}
module.exports.execute = execute;