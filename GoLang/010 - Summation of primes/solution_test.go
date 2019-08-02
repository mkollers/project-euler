package project_euler

import (
	"testing"
)

func TestEuler010(t *testing.T) {
	expected := 142913828922
	result := execute010()

	if result != expected {
		t.Errorf("The sum of all the primes below two million should be %d", expected)
	}
}
