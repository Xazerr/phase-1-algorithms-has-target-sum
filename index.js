function hasTargetSum(array, target) {
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

function hasTargetSum(arr, target) {
  // Create a Set to store numbers we've seen so far
  const seenNumbers = new Set();

  // Iterate through the array
  for (const num of arr) {
    // Calculate the complement (the number needed to reach the target)
    const complement = target - num;

    // If the complement is in the Set, we found a pair that adds up to the target
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Add the current number to the Set
    seenNumbers.add(num);
  }

  // If no pair is found, return false
  return false;
}

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;


