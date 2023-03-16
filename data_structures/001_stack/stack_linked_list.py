class Node:  
    def __init__(self, value):
        self.value = value
        self.next = None
  
  
class Stack: 
    def __init__(self):
        self.top = None
  
    def push(self, value):
        node = Node(value)
        node.next = self.top
        self.top = node
  
    def pop(self):
        node = self.top
        if node is None:
            raise Exception('This is an empty stack')
        self.top = node.next
        return node.value
  
    def peek(self):
        node = self.top
        if node is None:
            raise Exception('This is an empty stack')
        return node.value
  
    def is_empty(self):
        return not self.top
  
    def size(self):
        node = self.top
        count = 0
        if node is None:
            raise Exception('This is an empty stack')
        while node is not None:
            count += 1
            node = node.next
        return count
  
  
if __name__ == '__main__':
    stack = Stack()
    stack.push(2)
    stack.push(3)
#    print(stack.pop())
#    print(stack.top.value)
    print(stack.peek())
    print(stack.is_empty())
    print(stack.size())