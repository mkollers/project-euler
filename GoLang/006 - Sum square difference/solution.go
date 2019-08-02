package project_euler

func execute006() int {
	input := 100

	dif := (input*(input/2) + (input / 2)) // 99 + 1 = 100 und 98 + 2 = 100 usw. -> 100 * 50 + 50, da der die mitte übrig bleibt
	dif *= dif                             // jetzt quadrieren
	for i := 1; i <= input; i++ {
		dif -= i * i
	}
	return dif
}
