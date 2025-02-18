//Validate Balanced Brackets

function isBalanced(equation) {
  const output = [];
  const bracket = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (const char of equation) {
    if (char === '(' || char === '{' || char === '[') {
      
      output.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      
      if (output.length === 0 || output[output.length - 1] !== bracket[char]) {
        return false;
      }
      output.pop();
    }
  }
  return output.length === 0;
}

console.log(isBalanced("(a + b) * [c - d)")); // true
console.log(isBalanced("(a + b) * [(c - d)]"))
