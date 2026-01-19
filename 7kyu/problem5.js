///6 kyu
//Valid Braces
//Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

//This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

//All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

//What is considered Valid?
//A string of braces is considered valid if all braces are matched with the correct brace.

//example
//"(){}[]"   =>  True
//"([{}])"   =>  True
//"(}"       =>  False
//"[(])"     =>  False
//"[({})](]" =>  False
// in javascript please


/* Using stack based ,method */

function validBraces(braces) {
  const stack = [];
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let char of braces) {
    // If it's an opening brace, push it to stack
    if (pairs[char]) {
      stack.push(char);
    } 
    // If it's a closing brace
    else {
      // Get the last opening brace
      const last = stack.pop();
      // Check if it matches the current closing brace
      if (pairs[last] !== char) {
        return false;
      }
    }
  }

  // Check if all braces were matched
  return stack.length === 0;
}


//Using Array Method


function validBraces(braces) {
  const stack = [];
  
  for (let char of braces) {
    switch (char) {
      case '(':
      case '[':
      case '{':
        stack.push(char);
        break;
      case ')':
        if (stack.pop() !== '(') return false;
        break;
      case ']':
        if (stack.pop() !== '[') return false;
        break;
      case '}':
        if (stack.pop() !== '{') return false;
        break;
    }
  }
  
  return stack.length === 0;
}