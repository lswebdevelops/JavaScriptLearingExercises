

 let a = prompt("give me a number", 3);
 let b = prompt("give me a number", 5);

// function findGreater(a, b) {
//   if(a > b) {
//     return "a is greater";
//   }
//   else {
//     return "b is greater or equal";
//   }
// }




// function findGreaters(a, b) {
//   return a > b ? "a is greater" : "b is greater or equal";
// }



// console.log(findGreater(a,b))

// console.log(findGreaters(a,b))



// // */************* */


// function checkEqual(a, b) {
//   return a === b? "Equal": "Not Equal"
//   }
  
//  console.log( checkEqual(1, 2))


function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}

console.log(findGreaterOrEqual(a,b))


function findGreaterThan(a, b ){
  return a === b ? "a is igual to b": a > b ? "a is greater than b" : "b is greater than a"
}

console.log(findGreaterThan(a,b))

function checkSign(num) {
  let numInt = parseInt(num);
  return numInt === 0 ? "zero" : numInt > 0 ? "positive" :  "negative";
  
  }
  
  console.log(checkSign(a))

  console.log(`a is: ${a} and b is ${b}`)






















