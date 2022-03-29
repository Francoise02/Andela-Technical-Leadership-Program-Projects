

function arraySort(array) {

    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }

  const arr = [23, 45, 1, 23, 90, 34, 5, 7];
const isPrime = n => {
   if (n===1){
   return false;
   }else if(n === 2){
      return true;
   }else{
      for(let x = 2; x < n; x++){
         if(n % x === 0){
            return true;
         }
      }
      return false;
   };
};

const filterPrime = arr => {
   const filtered = arr.filter(el => !isPrime(el));
   return filtered;
};

console.log("The original array is: ")
console.log(arr)
console.log(" ")
console.log("The array with only prime numbers is: ")
console.log(filterPrime(arr));

console.log(" ")
console.log("The sorted array is: ")
arraySort(filterPrime(arr));
console.log(filterPrime(arr));