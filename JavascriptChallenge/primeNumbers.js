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
console.log(filterPrime(arr));

