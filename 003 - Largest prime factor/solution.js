function execute() {
    var rest = 600851475143;
    for (var i = 2; rest > 1; i++) {
        if (rest % i === 0 && isPrime(i)) {
            rest /= i;  
        }
    }
    return i - 1;    
}

function isPrime (n)
{
    if (n < 2) return false;
    var q = Math.floor(Math.sqrt(n));
    for (var i = 2; i <= q; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }

    return true;
}

module.exports.execute = execute;