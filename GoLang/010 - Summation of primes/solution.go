package project_euler

import (
	"../shared"
)

func execute010() int {
	sum := 2
	for i := 3; i < 2e+6; i += 2 {
		if shared.IsPrime(i) {
			sum += i
		}
	}
	return sum
}
