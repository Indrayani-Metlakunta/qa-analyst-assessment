/**
 * --------------------------------------------
 * Author: Indrayani 
 * Part - 1 - Remove Duplicates
 * --------------------------------------------
 */

// Solution 1: Using filter() + indexOf() 
function removeDuplicates_filter(arr) {
 return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Solution 2: Using Set() + Array.from() 
function removeDuplicates_set(arr) {
 return Array.from(new Set(arr));
}

// Solution 3: Using reduce() 
function removeDuplicates_reduce(arr) {
 return arr.reduce((acc, curr) => {
 return acc.includes(curr) ? acc : [...acc, curr];
 }, []);
}

// Test Cases
function runTests() {
  const testCases = [
    { input: [1, 2, 3, 2, 4, 1, 5], expected: [1, 2, 3, 4, 5] },
    { input: [1, 1, 1], expected: [1] },
    { input: [], expected: [] },
    { input: [-1, 0, 1, -1, 0, 2], expected: [-1, 0, 1, 2] } 
  ];

  const solutions = {
    'filter + indexOf': removeDuplicates_filter,
    'Set + Array.from': removeDuplicates_set,
    'reduce()': removeDuplicates_reduce,
  };

  console.log('Running All Remove Duplicate Implementations:\n');

  Object.entries(solutions).forEach(([name, fn]) => {
    console.log(`Testing Solution: ${name}`);
    let allPassed = true;

    testCases.forEach((test, index) => {
      const output = fn(test.input);
      const passed = JSON.stringify(output) === JSON.stringify(test.expected);

      if (passed) {
        console.log(`Test ${index + 1} passed`);
      } else {
        console.log(
          `Test ${index + 1} failed | Input: ${JSON.stringify(test.input)} | Expected: ${JSON.stringify(
            test.expected
          )} | Got: ${JSON.stringify(output)}`
        );
        allPassed = false;
      }
    });

    console.log(allPassed ? 'All tests passed.\n' : 'Some tests failed.\n');
  });
}



runTests();

module.exports = {
 removeDuplicates_filter,
 removeDuplicates_set,
 removeDuplicates_reduce,
};