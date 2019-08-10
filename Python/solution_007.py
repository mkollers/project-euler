from shared import isPrime

def execute007():
    count = 0
    current = 2
    while count < 10001:
        if isPrime(current):
            count += 1
        current += 1

    return current - 1
