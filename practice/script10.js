//10. Calculate Fibonacci Sequence

// let n;
// function fibonacci(n){
//     if(n==0 || n==1){
//         return 1
//     }
//     else{
//         return n*fibonacci(n-1)
//     }
// }
// console.log(fibonacci(6))

let n;
function fibonacci(n) {
    let a = 0, b = 1, nextNum;
    console.log(a);
    console.log(b);
    for (let i = 2; i <= n; i++) {
        nextNum = a + b;
        console.log(nextNum); 
        a = b;  
        b = nextNum;  
    }
}
fibonacci(6);
