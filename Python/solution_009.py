def execute009():
    for a in range(1, 1000):
        b = a + 1
        while b+a < 1000:
            c = 1000 - a - b
            if a*a+b*b == c*c:
                return a * b * c
            b += 1
    return 0
