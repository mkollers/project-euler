def execute005():
    i = 20
    while isDivisible(i) == False:
        i += 20
    return i

def isDivisible(n):
    i = 19
    while i > 10:
        if n%i != 0:
            return False
        i = i-1
    return True
