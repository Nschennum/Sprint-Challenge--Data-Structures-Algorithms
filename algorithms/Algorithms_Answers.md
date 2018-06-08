Add your answers to the Algorithms exercises here.

a) O(n^3/n^2) = O(n)
b) O(log n) DST
c) O(sqrt(n))
d) O(n log(n))
e) O(n^3)
f) O(n)
g) O(n)

Exercise 2
a. function maxDiff(arr) {
    let min = arr[0]; 
    let maxDiff = 0; 

    arr.forEach(val => {
        min = Math.min(min, val); 
        maxDiff = Math.max(maxDiff, val - min); 
    });
    return maxDiff;
}

b) Use Binary Search

Exercise 3

a) 0(n)
b) O(log(n)