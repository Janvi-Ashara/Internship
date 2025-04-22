// 6. Create a function that checks if a given string is a palindrome (a word that reads the same backward as forward).

function palindrome(str){
    const reversed = str.split('').reverse().join('');
    if(str == reversed){
        console.log('palindrome')
    }
    else{
        console.log('not Palindrome')
    }
    return str==reversed
}
palindrome('abba')