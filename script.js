// this was a multiply function used for a sum function//
// function multiply(arr, n) {
//   let product = 0;
//   for (let i = 0; i < n; i++) {
//     product += arr[i];
//   }
//   return product;
// }
// let number = prompt("Type a number", 3);
// let array = [];
// for(let i = 1; i <= number; i ++){
//   array.push(i)
// }
// console.log(`Items of \narray: ${array}`);
// let result = multiply(array, array.length);
// console.log(`Sum of \narray: ${result}`)


// now solving it as an recursive function: 
function sum(arr, n) {
  // Only change code below this line
 if (n <= 0) {
      return 0;
    } else {

      return sum(arr, n - 1) + arr[n - 1];
    }
  // Only change code above this line
}
let number = prompt("Type a number", 3);
let array = [];
for(let i = 1; i <= number; i ++){
  array.push(i)
}
console.log(`Items of \narray: ${array}`);
let result = sum(array, array.length);
console.log(`Sum of \narray: ${result}`)
