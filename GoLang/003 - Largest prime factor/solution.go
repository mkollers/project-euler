package project_euler

import "../shared"

func execute003() int {
	rest := 600851475143
	i := 2
	for ; rest > 1; i++ {
		if rest%i == 0 && shared.IsPrime(i) {
			rest /= i
		}
	}
	return i - 1
}
