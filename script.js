// let array = [13,20,30];
// let n = array.length;


// function sum(arr, n) {
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum  += arr[i];
//   }
//   return sum;
// }

// console.log(sum(array,n));


// // now a recursive function 


// function sum2(arr, n) {
//   if (n <= 0) {
//     return 0;
//   } else {
//     return sum2(arr, n - 1) + arr[n - 1];
//   }
// }
//   console.log(sum2(array,n));


function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}

console.log(countup(5));


// Only change code below this line
function countdown(n){
  if (n < 1) {
   return [];
    
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
// Only change code above this line

console.log(countdown(10))