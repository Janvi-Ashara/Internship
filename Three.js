// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.



function createCounter(n) {
    return function() {
        return n++;
    };
}

// Example usage
const counter = createCounter(5);

console.log(counter()); // 5
console.log(counter()); // 6
console.log(counter()); // 7
console.log(counter()); // 8


