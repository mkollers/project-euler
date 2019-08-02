package project_euler

func execute002() int {
	sum := 0

	before := 1
	now := 2
	for now < 4000000 {
		if now%2 == 0 {
			sum += now
		}
		now += before
		before = now - before
	}
	return sum
}
