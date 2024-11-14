// 5. Write a function to find the sum and average of array elements [1, 9, 8].

function sumAndAverage(arr) {
    const sum = arr.reduce((total, num) => total + num, 0);
    const average = sum / arr.length;
    return { sum, average };
  }
  
  console.log(sumAndAverage([1, 9, 8])); // Output: { sum: 18, average: 6 }
  