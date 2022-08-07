
function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}
let number = prompt("Type a number", 10);
let array = [];
for(let i = 1; i <= number; i ++){
  array.push(i)
}
console.log(`items of \narray: ${array}`)
let result = multiply(array, array.length);
console.log(`product of \narray: ${result}`)