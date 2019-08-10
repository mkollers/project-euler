import unittest
from solution_001 import execute001
from solution_002 import execute002
from solution_003 import execute003
from solution_004 import execute004
from solution_005 import execute005
from solution_006 import execute006
from solution_007 import execute007
from solution_008 import execute008
from solution_009 import execute009
from solution_010 import execute010

class TestEuler(unittest.TestCase):
    """
    Test all euler solutions
    """

    def test_solution_001(self):
        """
        The sum of all the multiples of 3 or 5 below 1000 should be 233168
        """
        result = execute001()
        self.assertEqual(233168, result)

    def test_solution_002(self):
        """
        The sum of the even-valued terms in the Fibonacci sequence whose values do not exceed four million should be 4613732
        """
        result = execute002()
        self.assertEqual(4613732, result)

    def test_solution_003(self):
        """
        The largest prime factor of the number 600851475143 should be 6857
        """
        result = execute003()
        self.assertEqual(6857, result)

    def test_solution_004(self):
        """
        The largest palindrome made from the product of two 3-digit numbers should be 906609
        """
        result = execute004()
        self.assertEqual(906609, result)

    def test_solution_005(self):
        """
        The smallest positive number that is evenly divisible by all of the numbers from 1 to 20 should be 232792560
        """
        result = execute005()
        self.assertEqual(232792560, result)

    def test_solution_006(self):
        """
        The difference between the sum of the squares of the first one hundred natural numbers and the square of the sum should be 25164150
        """
        result = execute006()
        self.assertEqual(25164150, result)

    def test_solution_007(self):
        """
        The the 10001st prime number should be 104743
        """
        result = execute007()
        self.assertEqual(104743, result)

    def test_solution_008(self):
        """
        The product of the thirteen adjacent digits in the 1000-digit number that have the greatest product should be 23514624000
        """
        result = execute008()
        self.assertEqual(23514624000, result)

    def test_solution_009(self):
        """
        The product of the Pythagorean triplet for which a + b + c = 1000 should be 31875000
        """
        result = execute009()
        self.assertEqual(31875000, result)

    def test_solution_010(self):
        """
        The sum of all the primes below two million should be 142913828922
        """
        result = execute010()
        self.assertEqual(142913828922, result)


if __name__ == "__main__":
    unittest.main()
