// 3. Write a function to calculate the sum of digits in a number (e.g., 123: 1 + 2 + 3 = 6 or 1234: 1 + 2 + 3 + 4 = 10).

function sumOfDigits(num) {
    return String(num)
      .split('')
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  
  console.log(sumOfDigits(123));  // Output: 6
  console.log(sumOfDigits(1234)); // Output: 10
  