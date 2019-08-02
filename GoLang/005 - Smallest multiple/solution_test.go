package project_euler

import (
	"testing"
)

func TestEuler005(t *testing.T) {
	expected := 232792560
	result := execute005()

	if result != expected {
		t.Errorf("The smallest positive number that is evenly divisible by all of the numbers from 1 to 20 should be %d", expected)
	}
}
