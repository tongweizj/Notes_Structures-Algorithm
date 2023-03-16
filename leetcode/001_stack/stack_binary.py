from stack_array import Stack
def divide_by_two(decNumber):
    remstack = Stack()

    while decNumber > 0:
        rem = decNumber % 2
        # 将余数逐个加入
        remstack.push(rem)
        decNumber = decNumber // 2

    binString = ""
    while not remstack.is_empty():
        binString = binString + str(remstack.pop())

    return binString

if __name__ == '__main__':
    print(divide_by_two(42))