class Stack:
    def __init__(self):
        self.values = []
    
    def push(self, value):       
        self.values.append(value)

    def pop(self):
        return self.values.pop()

    def is_empty(self):
        return self.size() == 0

    def size(self):
        return len(self.values)

    def peek(self):
        return self.values[self.size()-1]


class Solution:
    def isValid(self, s: str) -> bool:
      stack = Stack()
      perCh = ''
      for ch in s:
        if ch =='(' or ch =='[' or ch =='{' :
          stack.push(ch)
        else:
          perCh = stack.pop()
          if(perCh != ch):
            return False
      return True
    
if __name__ == '__main__':
   input = "()"
   Solution.isValid(input)
