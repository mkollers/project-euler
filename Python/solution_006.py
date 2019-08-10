def execute006():
    input = 100

    dif = (input*(input/2) + (input / 2))
    dif *= dif
    for i in range (1,input+1):
        dif -= i * i
    return dif
