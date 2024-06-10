# Notes on Data Structures in JavaScript

## 1. Arrays
An array is a collection of elements that are accessed by indexing.

### Example:
```javascript
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: Apple
```

### Common Operations:
- **Add elements**: `fruits.push("Mango");`
- **Remove elements**: `fruits.pop();`
- **Access elements**: `fruits[index];`

## 2. Strings
Strings are sequences of characters used to store and manipulate text.

### Example:
```javascript
let greeting = "Hello, World!";
console.log(greeting.length); // Output: 13
console.log(greeting.substring(0, 5)); // Output: Hello
```

### Common Operations:
- **Concatenation**: `let fullGreeting = greeting + " How are you?";`
- **Substring**: `greeting.substring(0, 5);`
- **Length**: `greeting.length;`

## 3. Stack
A stack is a LIFO (Last In, First Out) data structure.

### Example:
```javascript
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) return "Underflow";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Output: 2
```

## 4. Queue
A queue is a FIFO (First In, First Out) data structure.

### Example:
```javascript
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) return "Underflow";
        return this.items.shift();
    }

    front() {
        if (this.items.length === 0) return "No elements in Queue";
        return this.items[0];
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // Output: 1
```

## 5. Tree
A tree is a hierarchical data structure with a root node and child nodes.

### Example (Binary Tree):
```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }
}

let tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
```

## 6. Graph
A graph is a collection of nodes connected by edges.

### Example:
```javascript
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addEdge("A", "B");
console.log(graph.adjacencyList); // Output: { A: [ 'B' ], B: [ 'A' ] }
```

## 7. Linked List
A linked list is a linear data structure where elements are stored in nodes and each node points to the next.

### Example:
```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    remove(value) {
        let current = this.head;
        let previous = null;

        while (current !== null) {
            if (current.value === value) {
                if (previous === null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return current.value;
            }
            previous = current;
            current = current.next;
        }
        return -1;
    }
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.remove(1);
console.log(list.head.value); // Output: 2
```

## 8. Priority Queue
A priority queue is a type of queue where elements are removed based on priority.

### Example:
```javascript
class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 1, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(queueElement);
        }
    }

    dequeue() {
        if (this.isEmpty()) return "Underflow";
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("A", 2);
priorityQueue.enqueue("B", 1);
console.log(priorityQueue.dequeue().element); // Output: B
```
### Priority Queue using Heap in JavaScript

A priority queue can be efficiently implemented using a binary heap. A binary heap is a complete binary tree that maintains the heap property, where the key at a parent node is either greater than or equal to the keys of its children (for a max heap) or less than or equal to the keys of its children (for a min heap).

Here, we'll implement a priority queue using a min heap.

### Implementation

```javascript
class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(element) {
        this.heap.push(element);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[index].priority < this.heap[this.getParentIndex(index)].priority) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    remove() {
        if (this.heap.length === 0) {
            return "Underflow";
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.getRightChildIndex(index) < this.heap.length && this.heap[this.getRightChildIndex(index)].priority < this.heap[smallerChildIndex].priority) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index].priority <= this.heap[smallerChildIndex].priority) {
                break;
            }
            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    peek() {
        return this.heap[0];
    }
}

class PriorityQueue {
    constructor() {
        this.minHeap = new MinHeap();
    }

    enqueue(element, priority) {
        const queueElement = { element, priority };
        this.minHeap.insert(queueElement);
    }

    dequeue() {
        return this.minHeap.remove().element;
    }

    isEmpty() {
        return this.minHeap.isEmpty();
    }

    peek() {
        return this.minHeap.peek().element;
    }
}

// Example usage:
const pq = new PriorityQueue();
pq.enqueue("Task 1", 2);
pq.enqueue("Task 2", 1);
pq.enqueue("Task 3", 3);

console.log(pq.dequeue()); // Output: Task 2
console.log(pq.dequeue()); // Output: Task 1
console.log(pq.dequeue()); // Output: Task 3
```

### Explanation:

1. **MinHeap Class**:
    - **insert**: Adds an element to the heap and maintains the heap property by moving the element up (heapifyUp).
    - **remove**: Removes and returns the smallest element (root) and maintains the heap property by moving elements down (heapifyDown).
    - **heapifyUp**: Ensures the heap property is maintained after insertion.
    - **heapifyDown**: Ensures the heap property is maintained after removal.
    - **swap**: Swaps two elements in the heap.
    - **getParentIndex**, **getLeftChildIndex**, **getRightChildIndex**: Utility functions to get the index of the parent and children of a node.

2. **PriorityQueue Class**:
    - **enqueue**: Inserts an element with a priority into the heap.
    - **dequeue**: Removes and returns the element with the highest priority (lowest numerical value).
    - **isEmpty**: Checks if the queue is empty.
    - **peek**: Returns the element with the highest priority without removing it.

This implementation provides efficient `enqueue` and `dequeue` operations, both with a time complexity of \(O(\log n)\).
### Map and Set in JavaScript

Both `Map` and `Set` are part of the ES6 standard and provide unique features for handling collections of data.

## 1. Map
A `Map` is a collection of key-value pairs where keys can be of any type.

### Example:
```javascript
// Creating a Map
let map = new Map();

// Adding elements
map.set('name', 'John');
map.set('age', 30);

// Accessing elements
console.log(map.get('name')); // Output: John

// Checking if a key exists
console.log(map.has('age')); // Output: true

// Removing elements
map.delete('name');
console.log(map.has('name')); // Output: false

// Getting the size of the Map
console.log(map.size); // Output: 1

// Iterating over a Map
map.set('job', 'Engineer');
for (let [key, value] of map) {
    console.log(key, value);
}
// Output:
// age 30
// job Engineer
```

### Common Methods:
- `set(key, value)`: Adds or updates an element with the specified key and value.
- `get(key)`: Returns the value associated with the key.
- `has(key)`: Returns `true` if a value is associated with the key.
- `delete(key)`: Removes the element with the specified key.
- `clear()`: Removes all elements from the Map.
- `size`: Returns the number of key-value pairs.

## 2. Set
A `Set` is a collection of unique values. Each value can occur only once in a Set.

### Example:
```javascript
// Creating a Set
let set = new Set();

// Adding elements
set.add(1);
set.add(2);
set.add(2); // Duplicate values are ignored

// Checking if a value exists
console.log(set.has(1)); // Output: true
console.log(set.has(3)); // Output: false

// Removing elements
set.delete(2);
console.log(set.has(2)); // Output: false

// Getting the size of the Set
console.log(set.size); // Output: 1

// Iterating over a Set
set.add(3);
set.add(4);
for (let value of set) {
    console.log(value);
}
// Output:
// 1
// 3
// 4
```

### Common Methods:
- `add(value)`: Adds a new element with the given value.
- `has(value)`: Returns `true` if the value exists in the Set.
- `delete(value)`: Removes the element with the specified value.
- `clear()`: Removes all elements from the Set.
- `size`: Returns the number of elements.

### Differences between Map and Set:
- **Map**: Stores key-value pairs. Keys can be any type, including functions, objects, and primitives.
- **Set**: Stores unique values of any type, whether primitive values or object references.

### Practical Usage:
- **Map**: Useful when you need to associate data with a specific key and retrieve it efficiently.
- **Set**: Useful for storing unique values and performing operations like union, intersection, and difference.

### Example: Using Map and Set together
```javascript
let map = new Map();
let set1 = new Set([1, 2, 3]);
let set2 = new Set([3, 4, 5]);

map.set('set1', set1);
map.set('set2', set2);

// Union
let union = new Set([...set1, ...set2]);
console.log(union); // Output: Set { 1, 2, 3, 4, 5 }

// Intersection
let intersection = new Set([...set1].filter(x => set2.has(x)));
console.log(intersection); // Output: Set { 3 }

// Difference
let difference = new Set([...set1].filter(x => !set2.has(x)));
console.log(difference); // Output: Set { 1, 2 }
```

In this example, we store two sets in a map and then perform union, intersection, and difference operations on them using Set methods.
