package project_euler

import (
	"testing"
)

func TestEuler006(t *testing.T) {
	expected := 25164150
	result := execute006()

	if result != expected {
		t.Errorf("The difference between the sum of the squares of the first one hundred natural numbers and the square of the sum should be %d", expected)
	}
}
