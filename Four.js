// 4. “given array => [1,2,3,4,5,6,7,8,9]
// expected Output => if odd then [1,3,5,7,9]; if even then [2,4,6,8]”

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let num = '';
// for (const el in arr) {
//     num += arr[el]
//     console.log(num)
// }

// for (const element of arr) {
//     if(element % 2 == 0) {
//         console.log(`${element} even`)
//     }
//     else{
//         console.log(`${element} odd`)
//     }
// }

let elementodd = [];
let elementEven = [];
for (const x of arr) {
    if (x % 2 == 0) {
        elementEven.push(x)
    }
    else{
        elementodd.push(x)
    }
}
console.log(elementEven)
console.log(elementodd)


