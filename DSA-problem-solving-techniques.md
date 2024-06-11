
## Sliding Window Technique 

The sliding window technique is a method for solving problems that involve arrays or lists, where you need to find a subarray that satisfies certain conditions. It is particularly useful for problems involving contiguous subarrays or substrings.

### How Sliding Window Works
The sliding window technique involves creating a window that slides over the array. This window can be fixed-sized or variable-sized, depending on the problem. You keep track of the window's start and end indices and adjust these indices to find the desired result.

### Types of Sliding Window

1. **Fixed-Size Sliding Window:** The window size remains constant.
2. **Dynamic-Size Sliding Window:** The window size can grow or shrink based on conditions.

### Common Problems Using Sliding Window

1. Maximum sum subarray of size k.
2. Longest substring without repeating characters.
3. Minimum window substring.

### Example 1: Maximum Sum Subarray of Size K

#### Problem
Given an array of integers and an integer `k`, find the maximum sum of a subarray of size `k`.

#### Approach
1. Use a sliding window of size `k`.
2. Calculate the sum of the initial window.
3. Slide the window one element at a time, updating the sum by subtracting the element that is left behind and adding the new element.

#### Implementation in JavaScript

```javascript
function maxSumSubarray(arr, k) {
    let n = arr.length;
    if (n < k) return null;

    let maxSum = 0;
    let windowSum = 0;

    // Calculate the sum of the first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    maxSum = windowSum;

    // Slide the window over the array
    for (let i = k; i < n; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

// Example usage
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 3;
console.log(maxSumSubarray(arr, k)); // Output: 24 (7+8+9)
```

### Example 2: Longest Substring Without Repeating Characters

#### Problem
Given a string, find the length of the longest substring without repeating characters.

#### Approach
1. Use a dynamic-sized sliding window.
2. Use a set to keep track of characters in the current window.
3. Expand the window by moving the end pointer. If a duplicate character is found, shrink the window from the start until the duplicate is removed.

#### Implementation in JavaScript

```javascript
function lengthOfLongestSubstring(s) {
    let n = s.length;
    let set = new Set();
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < n; end++) {
        while (set.has(s[end])) {
            set.delete(s[start]);
            start++;
        }
        set.add(s[end]);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage
let str = "abcabcbb";
console.log(lengthOfLongestSubstring(str)); // Output: 3 (abc)
```

### Example 3: Minimum Window Substring

#### Problem
Given two strings `s` and `t`, find the minimum window in `s` which will contain all the characters in `t`.

#### Approach
1. Use a dynamic-sized sliding window.
2. Use a hash map to keep track of character counts in `t`.
3. Expand the window by moving the end pointer to include characters until all characters in `t` are included.
4. Contract the window from the start to find the smallest window that contains all characters.

#### Implementation in JavaScript

```javascript
function minWindow(s, t) {
    let map = new Map();
    for (let char of t) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let start = 0, end = 0, minStart = 0, minLength = Infinity, counter = map.size;

    while (end < s.length) {
        let endChar = s[end];
        if (map.has(endChar)) {
            map.set(endChar, map.get(endChar) - 1);
            if (map.get(endChar) === 0) counter--;
        }
        end++;

        while (counter === 0) {
            if (end - start < minLength) {
                minLength = end - start;
                minStart = start;
            }
            let startChar = s[start];
            if (map.has(startChar)) {
                map.set(startChar, map.get(startChar) + 1);
                if (map.get(startChar) > 0) counter++;
            }
            start++;
        }
    }

    return minLength === Infinity ? "" : s.substring(minStart, minStart + minLength);
}

// Example usage
let s = "ADOBECODEBANC";
let t = "ABC";
console.log(minWindow(s, t)); // Output: "BANC"
```


## Two Pointers Technique 

The two-pointer technique is a powerful approach used to solve various algorithmic problems, especially those involving arrays or linked lists. The technique involves using two pointers (or indices) to traverse the data structure, usually from different ends or at different speeds, to solve a problem efficiently.

### When to Use Two Pointers

- **Sorted Arrays:** When dealing with problems that require finding pairs or elements in sorted arrays.
- **Linked Lists:** For problems involving reversing, detecting cycles, or finding the intersection.
- **Strings:** For substring or palindromic problems.

### Common Patterns

1. **Opposite Ends:** One pointer starts at the beginning, and the other starts at the end, moving towards each other.
2. **Same Direction:** Both pointers start from the same end but move at different speeds or one pointer lags behind the other.

### Examples of Problems Using Two Pointers

#### Example 1: Two Sum II (Input array is sorted)

**Problem:** Given a sorted array of integers, find two numbers such that they add up to a specific target number. Return the indices of the two numbers (1-based index).

**Approach:**
1. Use two pointers: one at the beginning (`left`) and one at the end (`right`).
2. Calculate the sum of the elements at these pointers.
3. If the sum is equal to the target, return the indices.
4. If the sum is less than the target, move the `left` pointer to the right to increase the sum.
5. If the sum is greater than the target, move the `right` pointer to the left to decrease the sum.

**Implementation in JavaScript:**

```javascript
function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1]; // returning 1-based indices
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

// Example usage
let numbers = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(numbers, target)); // Output: [1, 2]
```

#### Example 2: Remove Duplicates from Sorted Array

**Problem:** Given a sorted array, remove the duplicates in-place such that each element appears only once and return the new length.

**Approach:**
1. Use one pointer (`i`) to iterate through the array.
2. Use another pointer (`j`) to keep track of the position of the next unique element.
3. If a duplicate is found, skip it; otherwise, place the unique element at the position indicated by `j` and increment `j`.

**Implementation in JavaScript:**

```javascript
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let j = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }

    return j + 1;
}

// Example usage
let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums)); // Output: 5 (Array becomes [0,1,2,3,4,...])
```

#### Example 3: Container With Most Water

**Problem:** Given an array of integers representing the height of lines on the x-axis, find two lines that together with the x-axis form a container such that the container contains the most water.

**Approach:**
1. Use two pointers: one at the beginning (`left`) and one at the end (`right`).
2. Calculate the area formed by the lines at these pointers.
3. Move the pointer pointing to the shorter line inward, since moving the longer line inward won't increase the area.

**Implementation in JavaScript:**

```javascript
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        let width = right - left;
        let h = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, width * h);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

// Example usage
let height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height)); // Output: 49
```

The two-pointer technique is a common approach used in linked list problems to solve various tasks efficiently. It often involves using two pointers that move through the list at different speeds or start from different positions to achieve the desired result. Here are a few classic problems that can be solved using the two-pointer technique in a linked list.

### 1. Detecting a Cycle in a Linked List
One common problem is to detect if a cycle exists in a linked list. This can be efficiently solved using the two-pointer technique, also known as Floyd's Cycle Detection Algorithm.

```javascript
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function hasCycle(head) {
    if (!head || !head.next) return false;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }
    return false;
}

// Example usage:
let node1 = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates a cycle

console.log(hasCycle(node1)); // Output: true
```

### 2. Finding the Middle of a Linked List
You can use two pointers to find the middle of a linked list. One pointer moves one step at a time (`slow`), and the other moves two steps at a time (`fast`). When the `fast` pointer reaches the end, the `slow` pointer will be at the middle.

```javascript
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function findMiddle(head) {
    if (!head) return null;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

// Example usage:
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(findMiddle(node1).value); // Output: 3
```

### 3. Removing the N-th Node from the End of a Linked List
You can use two pointers to remove the N-th node from the end of the list. One pointer (`fast`) starts at the head and moves N steps ahead. Then both pointers (`fast` and `slow`) move one step at a time until `fast` reaches the end. At this point, `slow` will be just before the node to be removed.

```javascript
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let slow = dummy;
    let fast = dummy;

    // Move fast ahead by n+1 steps
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Move both slow and fast until fast reaches the end
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }

    // Skip the desired node
    slow.next = slow.next.next;

    return dummy.next;
}

// Example usage:
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let newHead = removeNthFromEnd(node1, 2);
while (newHead) {
    console.log(newHead.value); // Output: 1 2 3 5
    newHead = newHead.next;
}
```

Binary search is typically used on arrays due to their direct index access, which allows the algorithm to achieve O(log n) time complexity. However, applying binary search directly to a linked list is inefficient because linked lists only allow sequential access, making each element access O(n). Therefore, binary search on a linked list will not yield the same performance benefits as on an array.

Despite this, it is still possible to implement a binary search on a linked list, but the complexity will be O(n log n) due to the need to traverse the list repeatedly. Below is an implementation of binary search on a singly linked list:

### Steps:
1. Find the middle node of the linked list.
2. Compare the middle node's value with the target value.
3. If the middle node's value is the target, return it.
4. If the middle node's value is greater than the target, repeat the process on the left half.
5. If the middle node's value is less than the target, repeat the process on the right half.

### Implementation

```javascript
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

// Helper function to find the middle of the linked list
function findMiddle(start, end) {
    let slow = start;
    let fast = start;

    while (fast !== end && fast.next !== end) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

// Binary search on linked list
function binarySearchLinkedList(head, target) {
    let start = head;
    let end = null;

    while (start !== end) {
        let mid = findMiddle(start, end);

        if (mid.value === target) {
            return mid; // Target found
        } else if (mid.value < target) {
            start = mid.next; // Search in the right half
        } else {
            end = mid; // Search in the left half
        }
    }

    return null; // Target not found
}

// Example usage:
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let targetNode = binarySearchLinkedList(node1, 3);
if (targetNode) {
    console.log("Target found:", targetNode.value); // Output: Target found: 3
} else {
    console.log("Target not found");
}

targetNode = binarySearchLinkedList(node1, 6);
if (targetNode) {
    console.log("Target found:", targetNode.value); // Output: Target not found
} else {
    console.log("Target not found");
}
```

### Explanation

1. **Finding the Middle Node:**
   - The `findMiddle` function uses the two-pointer technique to find the middle node of the linked list between `start` and `end`. The slow pointer advances one step at a time, while the fast pointer advances two steps at a time.

2. **Binary Search Function:**
   - The `binarySearchLinkedList` function performs a binary search on the linked list. It iteratively finds the middle node and compares it with the target value.
   - If the middle node's value matches the target, it returns the node.
   - If the middle node's value is less than the target, it searches in the right half of the list.
   - If the middle node's value is greater than the target, it searches in the left half of the list.

### Performance

Due to the linear traversal required to find the middle node, this implementation does not achieve the logarithmic time complexity of binary search on arrays. Instead, it has a time complexity of O(n log n), where each step to find the middle node takes O(n) time, and the binary search process takes O(log n) steps. Therefore, while this approach is theoretically possible, it is generally not practical for linked lists.

Merging two sorted linked lists is a common problem that can be efficiently solved using a two-pointer technique. Here's a detailed explanation and implementation of the algorithm in JavaScript:

### Explanation
1. Create a dummy node to simplify the merging process.
2. Use two pointers to traverse the two linked lists.
3. Compare the values at the current positions of the two pointers.
4. Append the smaller value to the merged list and move the corresponding pointer to the next node.
5. Repeat until one of the lists is exhausted.
6. Append the remaining nodes of the non-exhausted list to the merged list.
7. Return the merged list, starting from the node next to the dummy node.

### Implementation

```javascript
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    // Create a dummy node to serve as the starting point of the merged list
    let dummy = new ListNode(-1);
    let current = dummy;

    // Traverse both lists, appending the smaller node to the merged list
    while (l1 !== null && l2 !== null) {
        if (l1.value <= l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // Append the remaining nodes of l1 or l2
    if (l1 !== null) {
        current.next = l1;
    } else {
        current.next = l2;
    }

    // Return the merged list, starting from the node next to the dummy node
    return dummy.next;
}

// Helper function to print the linked list
function printList(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.value + " -> ");
        current = current.next;
    }
    console.log("null");
}

// Example usage:
let node1 = new ListNode(1);
let node2 = new ListNode(3);
let node3 = new ListNode(5);
node1.next = node2;
node2.next = node3;

let node4 = new ListNode(2);
let node5 = new ListNode(4);
let node6 = new ListNode(6);
node4.next = node5;
node5.next = node6;

let mergedHead = mergeTwoLists(node1, node4);
printList(mergedHead); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
```

### Explanation of the Code

1. **ListNode Class:**
   - This class defines a node in the linked list, containing a value and a pointer to the next node.

2. **mergeTwoLists Function:**
   - A dummy node is created to serve as the starting point of the merged list. This simplifies edge cases by providing a non-null starting point.
   - The `current` pointer is used to track the end of the merged list.
   - The function enters a loop that continues until one of the input lists is exhausted.
   - Inside the loop, the values of the current nodes of `l1` and `l2` are compared. The smaller value node is appended to the merged list, and the corresponding pointer (`l1` or `l2`) is moved to the next node.
   - After the loop, any remaining nodes from `l1` or `l2` are appended to the merged list.
   - Finally, the function returns the merged list, starting from the node next to the dummy node.

3. **printList Function:**
   - This helper function is used to print the values of the linked list nodes for verification purposes.

4. **Example Usage:**
   - Two sorted linked lists are created, and the `mergeTwoLists` function is called to merge them.
   - The merged list is printed to verify the result.

This implementation efficiently merges two sorted linked lists in O(n) time, where n is the total number of nodes in the two lists. The use of the dummy node simplifies the merging process and helps avoid handling special cases for the head of the merged list.

Linked lists are fundamental data structures often used in various problems in computer science. Here are several common problem-solving approaches for linked lists, with explanations and example problems:

### 1. **Two-Pointer Technique (Fast and Slow Pointers)**

#### Problems:
- **Detecting a Cycle in a Linked List**
- **Finding the Middle of a Linked List**
- **Finding the N-th Node from the End**

#### Example: Detecting a Cycle in a Linked List

```javascript
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}
```

### 2. **Dummy Node Technique**

#### Problems:
- **Merging Two Sorted Linked Lists**
- **Removing N-th Node from the End**

#### Example: Merging Two Sorted Linked Lists

```javascript
function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(-1);
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.value <= l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 !== null ? l1 : l2;
    return dummy.next;
}
```

### 3. **Recursive Approach**

#### Problems:
- **Reversing a Linked List**
- **Merging Two Sorted Linked Lists**
- **Linked List Palindrome Check**

#### Example: Reversing a Linked List

```javascript
function reverseList(head) {
    if (head === null || head.next === null) return head;

    let reversedList = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return reversedList;
}
```

### 4. **In-Place Reversal**

#### Problems:
- **Reversing a Linked List**
- **Reversing Nodes in k-Group**

#### Example: Reversing Nodes in k-Group

```javascript
function reverseKGroup(head, k) {
    let count = 0;
    let ptr = head;

    while (count < k && ptr !== null) {
        ptr = ptr.next;
        count++;
    }

    if (count === k) {
        let reversedHead = reverseLinkedList(head, k);
        head.next = reverseKGroup(ptr, k);
        return reversedHead;
    }

    return head;
}

function reverseLinkedList(head, k) {
    let prev = null;
    let current = head;

    while (k > 0) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
        k--;
    }

    return prev;
}
```

### 5. **Hashing**

#### Problems:
- **Detecting a Cycle in a Linked List**
- **Finding the Intersection of Two Linked Lists**

#### Example: Finding the Intersection of Two Linked Lists

```javascript
function getIntersectionNode(headA, headB) {
    let nodes = new Set();
    while (headA !== null) {
        nodes.add(headA);
        headA = headA.next;
    }

    while (headB !== null) {
        if (nodes.has(headB)) {
            return headB;
        }
        headB = headB.next;
    }

    return null;
}
```

### 6. **Divide and Conquer**

#### Problems:
- **Merge k Sorted Linked Lists**

#### Example: Merge k Sorted Linked Lists

```javascript
function mergeKLists(lists) {
    if (lists.length === 0) return null;
    return mergeHelper(lists, 0, lists.length - 1);
}

function mergeHelper(lists, start, end) {
    if (start === end) return lists[start];

    let mid = Math.floor((start + end) / 2);
    let left = mergeHelper(lists, start, mid);
    let right = mergeHelper(lists, mid + 1, end);
    return mergeTwoLists(left, right);
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(-1);
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.value <= l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 !== null ? l1 : l2;
    return dummy.next;
}
```

### 7. **Mathematical Approach**

#### Problems:
- **Add Two Numbers Represented by Linked Lists**

#### Example: Add Two Numbers Represented by Linked Lists

```javascript
function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0);
    let p = l1, q = l2, current = dummy;
    let carry = 0;

    while (p !== null || q !== null) {
        let x = (p !== null) ? p.value : 0;
        let y = (q !== null) ? q.value : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummy.next;
}
```

These approaches provide a robust framework for solving a wide range of linked list problems. By understanding these techniques, you can tackle most linked list-related challenges efficiently.
