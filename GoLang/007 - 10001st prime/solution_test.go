package project_euler

import (
	"testing"
)

func TestEuler007(t *testing.T) {
	expected := 104743
	result := execute007()

	if result != expected {
		t.Errorf("The the 10001st prime number should be %d", expected)
	}
}
