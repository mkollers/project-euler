package project_euler

func execute009() int {
	for a := 1; a < 1000; a++ {
		for b := a + 1; b+a < 1000; b++ {
			c := 1000 - a - b
			if a*a+b*b == c*c {
				return a * b * c
			}
		}
	}
	return 0
}
