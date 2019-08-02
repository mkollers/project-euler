package project_euler

import (
	"testing"
)

func TestEuler003(t *testing.T) {
	expected := 6857
	result := execute003()

	if result != expected {
		t.Errorf("The largest prime factor of the number 600851475143 should be %d", expected)
	}
}
