package project_euler

import (
	"testing"
)

func TestEuler008(t *testing.T) {
	expected := 23514624000
	result := execute008()

	if result != expected {
		t.Errorf("The product of the thirteen adjacent digits in the 1000-digit number that have the greatest product should be %d", expected)
	}
}
