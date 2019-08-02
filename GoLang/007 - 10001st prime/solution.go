package project_euler

import "../shared"

func execute007() int {
	count := 0
	current := 2
	for count < 10001 {
		if shared.IsPrime(current) {
			count++
		}
		current++
	}
	return current - 1
}
