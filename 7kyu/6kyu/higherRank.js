/*
JavaScript
Rank Up
Train
Skip
Search
6 kyu
Highest Rank Number in an Array
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples*/
function highestRank(arr) {
  const frequency = {};

  // Count frequency
  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  let maxCount = 0;
  let result = 0;

  for (let num in frequency) {
    let count = frequency[num];

    if (
      count > maxCount || 
      (count === maxCount && Number(num) > result)
    ) {
      maxCount = count;
      result = Number(num);
    }
  }

  return result;
}