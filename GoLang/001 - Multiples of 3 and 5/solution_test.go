package project_euler

import (
	"testing"
)

func TestEuler001(t *testing.T) {
	expected := 233168
	result := execute001()

	if result != expected {
		t.Errorf("The sum of all the multiples of 3 or 5 below 1000 should be %d", expected)
	}
}
