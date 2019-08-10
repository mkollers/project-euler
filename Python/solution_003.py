from shared import isPrime

def execute003():
	rest = 600851475143
	i = 2
	while rest > 1:
		if rest%i == 0 and isPrime(i):
			rest /= i
		i += 1
	return i - 1
