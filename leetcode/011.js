// # 11. Container With Most Water

// ## 题目
// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
// 给定n个非负整数a1，a2，...，an，其中每个代表坐标（i，ai）上的一个点。 绘制n条垂直线，使线i的两个端点位于（i，ai）和（i，0）。 找到两条线，它们与x轴一起形成一个容器，以便该容器包含最多的水。

// ## 思路
// 1. 遍历一次，把全部可能的组合结果都算一次
// 2. 保存，当前最大的组合的值
//    ```
//    An，Bm （m-n）*（a or B 取大的）
//    ```
// 3. 计算，每次计算结果都和当前最大组合比，如果更大，就替换
