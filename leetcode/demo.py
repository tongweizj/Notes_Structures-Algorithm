from typing import List

def shell_sort(arr:List[int]):
    """
    希尔排序
    :param arr: 待排序的List
    :return: 希尔排序是就地排序(in-place)
    """
    length = len(arr)
    dist = length // 2
    
    while dist > 0:
        for i in range(dist, length):
            temp = arr[i]
            j = i
            while j >= dist and temp < arr[j-dist]:
                arr[j] = arr[j-dist]
                j -= dist
            arr[j] = temp
        dist //= 2
        print(arr)

if __name__ == '__main__':
    import random
    random.seed(54)
    arr = [random.randint(0,100) for _ in range(10)]
    print("原始数据：", arr)
    shell_sort(arr)
    print("希尔排序结果：", arr)
