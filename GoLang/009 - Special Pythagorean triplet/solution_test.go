package project_euler

import (
	"testing"
)

func TestEuler009(t *testing.T) {
	expected := 31875000
	result := execute009()

	if result != expected {
		t.Errorf("The product of the Pythagorean triplet for which a + b + c = 1000 should be %d", expected)
	}
}
