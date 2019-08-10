def execute004():
    max = 0
    i = 999
    while i > 99:
        j = 999
        while j > 99:
            n = i * j
            if n < max:
                break
            nStr = str(n)
            palindrome = True
            for l in range(0,int(len(nStr)/2)):
                if nStr[l] != nStr[len(nStr)-l-1]:
                    palindrome = False
                    break
            if palindrome:
                tmp = int(nStr)
                max = tmp
            j = j-1
        i = i-1

    return max
