// 2. “In this coding challenge, you will be implementing a function called haveSameElements. This function takes in two arrays, array1 and array2, as parameters. The function should check if both arrays contain the same elements, regardless of their order.

// The haveSameElements function should return a boolean value of true if both arrays contain the same elements, and false otherwise.”


let arr1 = [1,3,4,6]
let arr2 = [3,4,1,6]


// function haveSameElements(array1,array2) {
//     if(array1.length == array2.length){
//        return true
//     }
//     else{
//        return false
//     }
// }
// console.log(haveSameElements(arr1,arr2))

function haveSameElements(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
        
    }
    return array1.every(element => array2.includes(element));  //The every() method executes a function for each array element.
    // return true
}

console.log(haveSameElements(arr1, arr2));

