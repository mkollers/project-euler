package project_euler

import (
	"strconv"
)

func execute004() int {
	max := 0
	for i := 999; i > 99; i-- {
		for j := 999; j > 99; j-- {
			n := i * j
			if n < max {
				break
			}
			nStr := strconv.Itoa(n)
			palindrome := true
			for l := 0; l < len(nStr)/2; l++ {
				if nStr[l] != nStr[len(nStr)-l-1] {
					palindrome = false
					break
				}
			}
			if palindrome {
				tmp, err := strconv.Atoi(nStr)
				if err == nil {
					max = tmp
				}
			}
		}
	}

	return max
}
