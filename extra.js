// 1
let vowels = ['a','e','i','o','u'];
console.log(vowels)

function  countVo(data) {
    let co= 0;
    for (const text of data) {
        if(vowels.includes(text.toLowerCase())){
            co++;
        }
    }
    console.log(co)
}
countVo('radhaa')

// 2

function groupByCategory(items) {
    return items.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});
}

// Example usage:
const objects = [
    { name: "Apple", category: "Fruit" },
    { name: "Carrot", category: "Vegetable" },
    { name: "Banana", category: "Fruit" },
    { name: "Broccoli", category: "Vegetable" },
    { name: "Mango", category: "Fruit" }
];

console.log(groupByCategory(objects));


// 3

// 4
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let { even, odd } = arr.reduce((acc, num) => {
    num % 2 === 0 ? acc.even.push(num) : acc.odd.push(num);
    return acc;
}, { even: [], odd: [] });

console.log("Even Numbers:", even);
console.log("Odd Numbers:", odd);

// OR

let elementOdd = arr.filter(num => num % 2 !== 0);
let elementeven = arr.filter(num => num % 2 === 0);

console.log("Odd Numbers:", elementOdd);  // Odd Numbers: [ 1, 3, 5, 7, 9 ]
console.log("Even Numbers:", elementeven);   //Even Numbers: [ 2, 4, 6, 8 ]


//8 
 const events = [
  { name: "Event 1", date: "2022-10-20", location: "New York" },
  { name: "Event 2", date: "2023-02-10", location: "Paris" },
  { name: "Event 3", date: "2023-01-01", location: "Tokyo" }
];

function bubbleSortByDate(events) {
    let n = events.length;
    let sortedEvents = [...events]; // Copy the array to avoid modifying the original
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (new Date(sortedEvents[j].date) > new Date(sortedEvents[j + 1].date)) {
                // Swap elements if they are in the wrong order
                let temp = sortedEvents[j];
                sortedEvents[j] = sortedEvents[j + 1];
                sortedEvents[j + 1] = temp;
            }
        }
    }
    return sortedEvents;
}

console.log(bubbleSortByDate(events));


// 12
console.log(array1.every(element => array2.includes(element)));

// or
return array1.length === array2.length && array1.sort().toString() === array2.sort().toString();

const array1 = [1, 2, 3];
const array2 = [3, 2, 1, 4, 5];

console.log(array1.every(element => array2.includes(element))); // true

const array3 = [1, 2, 6];
console.log(array3.every(element => array2.includes(element))); // false (6 is missing)


// 14
function findSubsets(nums, target) {
    function backtrack(index, currentSum) {
        // Base Case: If all numbers are used
        if (index === nums.length) {
            return currentSum === target ? 1 : 0;
        }
        
        // Choice 1: Add current number
        let add = backtrack(index + 1, currentSum + nums[index]);
        
        // Choice 2: Subtract current number
        let subtract = backtrack(index + 1, currentSum - nums[index]);
        
        // Total valid ways found
        return add + subtract;  //Since both addition and subtraction are possible choices, we return the total number of valid ways by adding both results.
    }

    return backtrack(0, 0);
}

// Example Usage:
console.log(findSubsets([1, 2, 3, 4], 3)); // Output: 4


// index → tells us which number in nums we are currently processing.

// currentSum → the sum so far after adding/subtracting previous numbers.

// 15. 
function debounce(func, delay) {
    let timer;
    
    return function(...args) {
      clearTimeout(timer); // Clear the previous timer
      timer = setTimeout(() => func.apply(this, args), delay); // Set a new timer
    };
  }
  


//  - charSet is a Set that keeps track of unique characters in the current window (substring).
//  - s is the input string.
//  - right is the pointer that expands the window by moving to the right.
// - left is the pointer that shrinks the window when a duplicate character is found.
// charSet.has(s[right])
// Checks if the character at s[right] is already in the charSet.
// If yes, it means there is a duplicate, so we need to adjust the window.
