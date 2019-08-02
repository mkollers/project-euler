package project_euler

func execute005() int {
	i := 20
	for !isDivisible(i) {
		i += 20
	}
	return i
}

func isDivisible(n int) bool {
	for i := 19; i > 10; i-- {
		if n%i != 0 {
			return false
		}
	}
	return true
}
