
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
