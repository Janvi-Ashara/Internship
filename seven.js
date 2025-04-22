// 7. You are given an array of n-1 integers in the range of 1 to n. There are no duplicates, and one number is missing. Write a function to find the missing number.


let arr = [0,1,2,3,4,6,7,8,9]

function missingNumber(arr,n) {
    let s =( n *(n+1)) / 2
    let result = arr.reduce((sum,num) => sum+num , 0)
    return s-result
    
}

console.log(missingNumber(arr,9))
