// “Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
// The fn function takes one or two arguments:
// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
// Please solve it without the built-in Array.filter method.”

function customFilter(arr, fn) {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}
const output = customFilter([1, 3, 4, 3, 5, 6, 5,5,5], (val) => val === 5);
console.log(output);  //[ 5, 5, 5, 5 ]


// 2
const arr = [1, 2,3, 4, 5, 6  ];

const result = customFilter(arr, (value) => value % 2 === 0);

console.log(result); // ➜ [2, 4, 6]


// 3
const arr1 = ["a", "b", "c", "d", "e"];

const result1 = customFilter(arr1, (value, index) => index % 2 === 0);

console.log(result1); // ➜ ["a", "c", "e"]

// 4

const arr2 = [0, 1, false, 2, "", 3];

const result2 = customFilter(arr2, (value) => Boolean(value));

console.log(result2); // ➜ [1, 2, 3]
