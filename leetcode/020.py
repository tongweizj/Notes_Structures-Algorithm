# 
# Valid Parentheses
# https://leetcode.com/problems/valid-parentheses/

# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.

# Example 1:
# Input: s = "()"
# Output: true

# Example 2:
# Input: s = "()[]{}"
# Output: true

# Example 3:
# Input: s = "(]"
# Output: false

# Constraints:
# 1 <= s.length <= 104
# s consists of parentheses only '()[]{}'.


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

    def peak(self):
        return self.values[self.size()-1]


class Solution:
    def isValid(self, s: str) -> bool:
      stack = Stack()
      perCh = ''
      for ch in s:
        if(ch =='(' || ch =='['||ch =='{' ) :
          stack.push(ch)
        else:
          perCh = stack.pop()
          if(perCh != ch):
            return false




class Solution2:
    # @return a boolean
    def isValid(self, s):
        stack = []
        dict = {"]":"[", "}":"{", ")":"("}
        for char in s:
            if char in dict.values():
                stack.append(char)
            elif char in dict.keys():
                if stack == [] or dict[char] != stack.pop():
                    return False
            else:
                return False
        return stack == []



class Solution3:
    def isValid(self, s):
        stack = [0]
        mapping = {0: None, '(':')', '[':']', '{':'}'}
        for c in s:
            if c in mapping: 
                stack.append(c)
            else:
                if mapping[stack.pop()] != c: return False
        return stack == [0]



## 回顾
# 1. 使用 dict
# 2. 使用 if c in dict 做判断
# 3. 不用写的完整的栈，可以用array