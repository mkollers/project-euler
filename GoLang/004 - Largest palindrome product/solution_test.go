package project_euler

import (
	"testing"
)

func TestEuler004(t *testing.T) {
	expected := 906609
	result := execute004()

	if result != expected {
		t.Errorf("The largest palindrome made from the product of two 3-digit numbers should be %d", expected)
	}
}
