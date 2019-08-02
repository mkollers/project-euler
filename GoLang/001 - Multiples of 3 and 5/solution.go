package project_euler

func execute001() int {
	sum := 0
	for i := 3; i < 1000; i++ {
		if i%3 == 0 || i%5 == 0 {
			sum += i
		}
	}
	return sum
}
