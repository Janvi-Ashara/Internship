// // 14. Write a function findSubsets(nums, target) that takes an array of integers and a target sum, make the calculation with array sum or substract to return the number that all array elemets calculation meat the target value.

function findSubsets(nums, target) {
  function calculation(index, currentSum) {  //recursion
    if (index === nums.length) {
      return currentSum === target ? 1 : 0 ;
    }

    let add = calculation(index + 1, currentSum + nums[index]);

    let subtract = calculation(index + 1, currentSum - nums[index]);

    return add + subtract;  //totl res is return
  }
  return calculation(0,0)  //to start the recursion.
}

console.log(findSubsets([1, 2, 3], 4)); // Output: 1
console.log(findSubsets([1, 2, 3, 4], 4)); // Output: 2
console.log(findSubsets([2, 3, 5, 7], 10)); // Output: 0
