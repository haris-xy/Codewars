/* Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
*/

function sum (numbers) {
    let nsum = 0;  
    for (let i = 0; i < numbers.length; i +=1)
    nsum += numbers[i]
      return nsum
  };

  //Oorr

function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }