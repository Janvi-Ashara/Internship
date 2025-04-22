//  “Write a function to count the number of vowels (a, e, i, o, u) in a given string.
//  countVowels(“”JavaScript”“); // Output: 3



let count = 0;
function countVowels(str) {
    for (const text of str) {
        if(text.toLowerCase()== 'a' || text.toLowerCase()=='e'|| text.toLowerCase()=='i'|| text.toLowerCase()=='o'|| text.toLowerCase()=='u'){
            count++;
        }
    }
    console.log(count)
}
countVowels('AEIOUAEIOUaeiou')  //15




