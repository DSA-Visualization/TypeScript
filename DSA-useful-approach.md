### 1. Binary Search

**Purpose:** To find the index of a given element `k` in a sorted array `arr`.

**Algorithm:**
- Binary search works by repeatedly dividing the search interval in half.
- Start with the entire array and repeatedly divide it into halves until the target element is found or the interval is empty.

**Code:**
```javascript
binarySearch(start, end, arr, k) {
    if (start > end) {
        return -1; // Element not found
    }
    const middle = Math.floor((start + end) / 2);
    if (arr[middle] == k) {
        return middle; // Element found
    } else if (arr[middle] > k) {
        return this.binarySearch(start, middle - 1, arr, k); // Search in the left half
    } else {
        return this.binarySearch(middle + 1, end, arr, k); // Search in the right half
    }
}
```

### 2. Find Triplets with Zero Sum

**Purpose:** To find if there are any triplets in the array that sum up to zero.

**Algorithm:**
- For each element in the array, use a hash set to check if there exists another pair in the array that sums up to the negative of the current element.
- This is done to find `a + b + c = 0` which is equivalent to `b + c = -a`.

**Code:**
```javascript
findTriplets(arr, n) {
    let found = false;
    for (let i = 0; i < n - 1; i++) {
        let unSet = new Set();
        for (let j = i + 1; j < n; j++) {
            let x = -(arr[i] + arr[j]);
            if (unSet.has(x)) {
                found = true;
                break;
            } else {
                unSet.add(arr[j]);
            }
        }
        if (found) break;
    }
    return found;
}
```

### 3. Count Subarrays with Sum Equal to 0

**Purpose:** To count the number of subarrays that sum to zero.

**Algorithm:**
- Use a hash map to store the cumulative sum and its frequency.
- For each element in the array, compute the cumulative sum.
- If the cumulative sum is zero or it has been seen before, it means there exists a subarray with sum zero.

**Code:**
```javascript
findSubarray(arr, n) {
    let count = 0;
    let h = new Map();
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum === 0) {
            count++;
        }
        if (h.has(sum)) {
            count += h.get(sum);
        }
        h.set(sum, (h.get(sum) || 0) + 1);
    }
    return count;
}
```

### 4. Smallest Subarray with Sum Greater than a Given Value

**Purpose:** To find the length of the smallest subarray with a sum greater than a given value `x`.

**Algorithm:**
- Use a sliding window approach with two pointers (`i` and `j`).
- Expand the window by moving the `j` pointer and contract it by moving the `i` pointer to maintain the sum greater than `x`.

**Code:**
```javascript
smallestSubWithSum(a, n, x) {
    let i = 0, j = 0;
    let sum = a[i];
    let min = Infinity;
    while (j < n) {
        if (sum <= x) {
            j++;
            if (j < n) {
                sum += a[j];
            }
        } else if (sum > x) {
            sum -= a[i];
            min = Math.min(min, j - i + 1);
            i++;
        }
    }
    return (min == Infinity) ? 0 : min;
}
```

### 5. Check if Brackets are Balanced

**Purpose:** To check if the brackets in a given string are balanced.

**Algorithm:**
- Use a stack to track opening brackets.
- For each closing bracket, check if it matches the most recent opening bracket on the stack.
- If all brackets are matched correctly, the string is balanced.

**Code:**
```javascript
ispar(x) {
    let i = -1;
    let stack = [];
    for (let ch of x) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
            i++;
        } else {
            if (i >= 0 && ((stack[i] === '(' && ch === ')') || (stack[i] === '{' && ch === '}') || (stack[i] === '[' && ch === ']'))) {
                stack.pop();
                i--;
            } else {
                return false;
            }
        }
    }
    return i === -1;
}
```

### 6. Check if Two Strings are Isomorphic

**Purpose:** To determine if two strings are isomorphic (one-to-one mapping of characters).

**Algorithm:**
- Use two hash maps to store character mappings from `str1` to `str2` and vice versa.
- Ensure that each character in `str1` maps to a single unique character in `str2` and vice versa.

**Code:**
```javascript
areIsomorphic(str1, str2) {
    if (str1.length != str2.length) return false;
    const map1 = new Map();
    const map2 = new Map();
    for (let i = 0; i < str1.length; i++) {
        if (map1.has(str1[i]) && map1.get(str1[i]) !== str2[i]) return false;
        if (map2.has(str2[i]) && map2.get(str2[i]) !== str1[i]) return false;
        map1.set(str1[i], str2[i]);
        map2.set(str2[i], str1[i]);
    }
    return true;
}
```

### 7. Kadane's Algorithm (Maximum Subarray Sum)

**Purpose:** To find the largest sum of any contiguous subarray.

**Algorithm:**
- Use a variable to track the current sum and another to track the best sum.
- For each element, update the current sum and the best sum.

**Code:**
```javascript
function max_subarray(numbers) {
    let best_sum = -Infinity;
    let current_sum = 0;
    for (let x of numbers) {
        current_sum = Math.max(x, current_sum + x);
        best_sum = Math.max(best_sum, current_sum);
    }
    return best_sum;
}
```

### 8. Largest Subarray with Sum 0

**Purpose:** To find the length of the largest subarray with a sum of 0.

**Algorithm:**
- Use a hash map to store the cumulative sum and its index.
- For each element, compute the cumulative sum.
- If the cumulative sum has been seen before, it means there exists a subarray with sum zero.

**Code:**
```javascript
maxLen(arr, n) {
    let sum = 0;
    let map = new Map();
    let max = 0;
    map.set(0, -1);

    for (let i = 0; i < n; i++) {
        sum += arr[i];
        if (map.has(sum)) {
            max = Math.max(max, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
    }
    return max;
}
```

Each of these algorithms addresses a specific problem, using appropriate data structures and logic to achieve efficient solutions. The two-pointer technique, sliding window approach, hash maps, and dynamic programming are some of the common strategies employed here.
