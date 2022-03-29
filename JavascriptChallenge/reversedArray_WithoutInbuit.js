let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = [];

for(let i = numbers.length -1; i >= 0; i--) {
  reversedNumbers.push(numbers[i]);
}

console.log("The original array is: " + numbers);
console.log("The reversed array is: " + reversedNumbers);