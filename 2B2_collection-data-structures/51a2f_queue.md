
#### 对列queue

## 知识点
    - [ ] [队列（视频）](https://www.coursera.org/learn/data-structures/lecture/EShpq/queue)
    - [ ] [原型队列/先进先出（FIFO）](https://en.wikipedia.org/wiki/Circular_buffer)
    - [ ] [[Review] Queues in 3 minutes (video)](https://youtu.be/D6gu-_tmEpQ)
    - [ ] 复杂度：
        - 在糟糕的实现情况下，使用链表所实现的队列，其入列和出列的时间复杂度将会是 O(n)。因为，你需要找到下一个元素，以致循环整个队列
        - enqueue：O(1)（平摊（amortized）、链表和数组 [探测（probing）]）
        - dequeue：O(1)（链表和数组）
        - empty：O(1)（链表和数组）

