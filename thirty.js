// 13. “Enter a positive number: 5
// Fibonacci Series:0,1,1,2,3,5”



// function fibo(n) {
//     if(n==1 || n==0){
//         return 0
//     }
//     return fibo(n - 1) + fibo(n - 2); 
// }
// console.log(fibo(5))


function fibo(n){
    let f0 =0;
    let f1 = 1
    let fn;
    if (n === 0) return 0; 
    if (n === 1) return 1;
   
        console.log(f0,f1)
        for (let i = 2; i <= n; i++) {
            fn = f0+f1
            console.log(fn)
            f0=f1
            f1=fn
       
    }
    return fn
}
fibo(5)
