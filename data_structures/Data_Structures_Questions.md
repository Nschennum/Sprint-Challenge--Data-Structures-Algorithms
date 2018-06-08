Add your answers to the questions below.

1. What is the runtime complexity of your `depthFirstForEach` method?
O(n)-traversing down a binary seach tree; touching every node as they get added to data-structure(DS), increasing linearly

2. What is the space complexity of your `depthFirstForEach` function?
O(n) Recursive approach emulates iterative appoach, utilizing a call stack, increasing space overal linearly
3. What is the runtime complexity of your `breadthFirstForEach` method?
O(n) same logic as DFFE, different order, using queue/stack adding data linearly to DS
4. What is the space complexity of your `breadthFirstForEach` method? 
O(n) "
5. What is the runtime complexity of your `heapsort` function?
O(2n log(n)) we have 2 loops each invoking O(log n) functions, so x1/2 => O(n log(n))
6. What is the space complexity of the `heapsort` function? Recall that your implementation should return a new array with the sorted data. What would be the space complexity if your function instead altered the input array?
O(n) if items are added; O(1) if nothing is added (all heap data > sorted data)