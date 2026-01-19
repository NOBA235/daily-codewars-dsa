//In the following 6 digit number:

//283910
//91 is the greatest sequence of 2 consecutive digits.

//In the following 10 digit number:

//1234567890
//67890 is the greatest sequence of 5 consecutive digits.

//Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

/*--------------using window sliding method-----------*/

function solution(digits) {
  let max = 0;
  
  // Iterate through the string, looking at each 5-digit window
  for (let i = 0; i <= digits.length - 5; i++) {
    // Extract 5-digit substring and convert to number
    const num = parseInt(digits.substring(i, i + 5));
    
    // Update max if this number is larger
    if (num > max) {
      max = num;
    }
  }
  
  return max;
}

/*----------slice mmethod---------*/

// This is the best solution for the kata
function solution(digits) {
  let max = 0;
  for (let i = 0; i <= digits.length - 5; i++) {
    max = Math.max(max, +digits.slice(i, i + 5));
  }
  return max;
}