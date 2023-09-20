from collections import deque

# 所有相连关系
graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

# 条件
def person_is_seller(name):
  return name[-1]=='m'

# 循环
def search(name):
  search_queue = deque() # 创建队列
  search_queue += graph[name]
  print(search_queue)
  searched = []
  while search_queue:
    person = search_queue.popleft()
    print('person'+person)
    if person not in searched:
      print(person + "is a mango seller!")
      return True
    else:
      search_queue += graph[person]
      searched.append(person)
  return False
  
search("you")