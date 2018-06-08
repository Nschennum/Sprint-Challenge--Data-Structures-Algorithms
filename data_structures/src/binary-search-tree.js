class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
//executes a callback on every value in a tree in depth-first order, 
//going left to right calling back or reading back values, pushing them into an array to see the path taken
  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstForEach(cb);
    }
    if (this.right) {
      this.right.depthFirstForEach(cb);
    }
  }
//bst's use nodes for position/direction; this function 
// pushes a new queue value to the tail correct potition of the proper 
// node and pushed the queue sequence into an array as it goes from L to R
  breadthFirstForEach(cb) {
    const queue = new Queue();
    queue.enqueue(this);
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      if (node.left) {
        queue.enqueue(node.left);
      }
      if (node.right) {
        queue.enqueue(node.right);
      }
      cb(node.value);
    }
  }
//inserts value at new node positions, going from left to right 
//checking that the greatest values go to the right down the tree
  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }

  getMax() {
    if (!this) return null;

    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }
}
// Another way to write Queue is in the DS Project 
// using addToTail(), removeHead(), and .head=null etc 
class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(x) {
    this.storage.push(x);
  }

  dequeue() {
    return this.storage.shift();
  }

  isEmpty() {
    return this.storage.length === 0;
  }
}

module.exports = BinarySearchTree, Queue;