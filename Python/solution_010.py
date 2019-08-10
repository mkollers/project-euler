from shared import isPrime

def execute010():
    sum = 2
    for i in range(3, int(2e+6), 2):
        if isPrime(i):
            sum += i
    return sum
