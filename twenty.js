function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found, return index
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in right half
        } else {
            right = mid - 1; // Search in left half
        }
    }
    
    return -1; // Target not found
}

// Example usage
let arr = [1, 3, 5, 7, 9, 11, 13];
let target = 11;
console.log("Element found at index:", binarySearch(arr, target)); 
// Output: Element found at index: 3
