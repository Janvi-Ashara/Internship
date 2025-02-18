//9. Find Longest Palindrome

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  
  function findLongestPalindrome(str) {
    let maxLength = 0;         
    let longestPalindrome = ''; 
  
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        let substring = str.slice(i, j); // Extract the current substring
         
        if (isPalindrome(substring) && substring.length > maxLength) {
          maxLength = substring.length;        
          longestPalindrome = substring;       
        }
      }
    }
  
    return longestPalindrome; 
  }
  
  console.log(findLongestPalindrome("123abcdcba12321abcdefghgfedcba"));
  