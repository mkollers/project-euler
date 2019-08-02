package project_euler

import (
	"testing"
)

func TestEuler002(t *testing.T) {
	expected := 4613732
	result := execute002()

	if result != expected {
		t.Errorf("The sum of the even-valued terms in the Fibonacci sequence whose values do not exceed four million should be %d", expected)
	}
}
